// validateLocations.js - Comprehensive location validator for DestinyGuessr
const fs = require('fs');
const path = require('path');

// Parsing settings
const AUTO_FIX = process.argv.includes('--fix');

console.log('Starting validation of Destiny 2 location data...');

// Read the locations.js file first
const locationsFilePath = path.join(__dirname, 'js', 'locations.js');
let locationsContent;
try {
  locationsContent = fs.readFileSync(locationsFilePath, 'utf8');
  console.log('Successfully read locations.js file.');
} catch (error) {
  console.log(`❌ Error reading locations.js file: ${error.message}`);
  process.exit(1);
}

// Get the directories where images should be
const assetsDir = path.join(__dirname, 'assets', 'locations');
let imageFiles = [];

if (!fs.existsSync(assetsDir)) {
  console.log(`⚠️ Assets directory not found at ${assetsDir}`);
  console.log('Will proceed with validation but cannot check for missing images.');
} else {
  // Get all files in the assets directory recursively
  function getAllFiles(dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
      const filePath = path.join(dirPath, file);
      if (fs.statSync(filePath).isDirectory()) {
        arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
      } else {
        arrayOfFiles.push(filePath);
      }
    });

    return arrayOfFiles;
  }

  // Get all image files in the assets directory
  imageFiles = getAllFiles(assetsDir);
  console.log(`Found ${imageFiles.length} image files in assets directory.`);
}

// Create lookup map of available image files
const availableImages = new Map();
imageFiles.forEach(file => {
  const relativePath = path.relative(__dirname, file).replace(/\\/g, '/');
  availableImages.set(relativePath, file);
});

// Extract locations data
const rePattern = /const locations = \{[\s\S]+?destinations: (\[[\s\S]+?\]),[\s\S]+?locationData: (\[[\s\S]+?\])/;
const matches = locationsContent.match(rePattern);

if (!matches || matches.length < 3) {
  console.log('❌ Could not parse locations data from locations.js');
  process.exit(1);
}

// Extract the raw text of destinations and locationData arrays
const destinationsRaw = matches[1];
const locationDataRaw = matches[2];

// Parse the destinations
let destinations = [];
try {
  // Get individual destination objects
  const destMatches = destinationsRaw.matchAll(/\{\s+id: "([^"]+)",\s+name: "([^"]+)",\s+areas: \[([\s\S]+?)\]\s+\}/g);

  for (const destMatch of destMatches) {
    const destId = destMatch[1];
    const destName = destMatch[2];
    const areasRaw = destMatch[3];

    // Parse areas for this destination
    const areas = [];
    const areaMatches = areasRaw.matchAll(/\{\s*id: "([^"]+)",\s*name: "([^"]+)"\s*\}/g);

    for (const areaMatch of areaMatches) {
      areas.push({
        id: areaMatch[1],
        name: areaMatch[2]
      });
    }

    destinations.push({
      id: destId,
      name: destName,
      areas: areas
    });
  }

  console.log(`Parsed ${destinations.length} destinations with their areas.`);
} catch (error) {
  console.log(`❌ Error parsing destinations: ${error.message}`);
  process.exit(1);
}

// Parse the locationData
let locationData = [];
try {
  // Get individual location objects
  const locMatches = locationDataRaw.matchAll(/\{\s+id: (\d+),\s+destination: "([^"]+)",\s+area: "([^"]+)",\s+imageUrl: "([^"]+)",\s+difficulty: "([^"]+)"\s+\}/g);

  for (const locMatch of locMatches) {
    locationData.push({
      id: parseInt(locMatch[1]),
      destination: locMatch[2],
      area: locMatch[3],
      imageUrl: locMatch[4],
      difficulty: locMatch[5]
    });
  }

  console.log(`Parsed ${locationData.length} locations.`);
} catch (error) {
  console.log(`❌ Error parsing locationData: ${error.message}`);
  process.exit(1);
}

// Create destination maps for validation
const destinationMap = new Map();
destinations.forEach(destination => {
  const areaMap = new Map();
  destination.areas.forEach(area => {
    areaMap.set(area.id, area);
  });

  destinationMap.set(destination.id, {
    name: destination.name,
    areas: areaMap
  });
});

// Validate each location
const invalidLocations = [];
const missingImages = [];
const fixedLocations = [];

locationData.forEach(location => {
  // Check if destination exists
  if (!destinationMap.has(location.destination)) {
    invalidLocations.push({
      id: location.id,
      issue: `Invalid destination ID: ${location.destination}`
    });
  } else {
    // Check if area exists in this destination
    const destination = destinationMap.get(location.destination);
    if (!destination.areas.has(location.area)) {
      invalidLocations.push({
        id: location.id,
        issue: `Invalid area ID: ${location.area} for destination: ${location.destination}`
      });
    }
  }

  // Check if image file exists
  const imagePath = path.join(__dirname, location.imageUrl);
  if (!fs.existsSync(imagePath)) {
    // Check if we can find another image with a similar pattern
    const baseImageName = path.basename(location.imageUrl, path.extname(location.imageUrl));
    const basePattern = baseImageName.replace(/_\d+$/, '');
    const destArea = `${location.destination}_${location.area}`;

    // Find alternative images for this area
    const alternativeImages = Array.from(availableImages.keys())
      .filter(img => img.includes(destArea))
      .filter(img => img !== location.imageUrl); // Exclude the current missing image

    missingImages.push({
      id: location.id,
      imageUrl: location.imageUrl,
      alternatives: alternativeImages
    });

    // Auto-fix if enabled and alternatives exist
    if (AUTO_FIX && alternativeImages.length > 0) {
      // Use the first alternative
      const newImageUrl = alternativeImages[0];

      // Replace in the content
      const oldImagePattern = new RegExp(`(\\s+id:\\s+${location.id},[\\s\\S]+?imageUrl:\\s+")${location.imageUrl.replace(/\//g, '\\/').replace(/\./g, '\\.')}(")`);
      locationsContent = locationsContent.replace(oldImagePattern, `$1${newImageUrl}$2`);

      fixedLocations.push({
        id: location.id,
        oldImage: location.imageUrl,
        newImage: newImageUrl
      });
    }
  }
});

// Print results
console.log('\n=== VALIDATION RESULTS ===\n');

if (invalidLocations.length > 0) {
  console.log(`❌ Found ${invalidLocations.length} invalid location references:`);
  invalidLocations.forEach(invalid => {
    console.log(`- Location ID ${invalid.id}: ${invalid.issue}`);
  });
} else {
  console.log('✅ All location references are valid!');
}

console.log('\n');

if (missingImages.length > 0) {
  console.log(`❌ Found ${missingImages.length} missing image files:`);
  missingImages.forEach(missing => {
    console.log(`- Location ID ${missing.id}: "${missing.imageUrl}" not found`);
    if (missing.alternatives.length > 0) {
      console.log(`  Available alternatives:`);
      missing.alternatives.forEach((alt, index) => {
        console.log(`  ${index + 1}. ${alt}`);
      });
    } else {
      console.log(`  No alternatives found.`);
    }
  });

  if (AUTO_FIX) {
    console.log('\n');
    if (fixedLocations.length > 0) {
      console.log(`🔧 Fixed ${fixedLocations.length} locations with alternative images:`);
      fixedLocations.forEach(fixed => {
        console.log(`- Location ID ${fixed.id}: "${fixed.oldImage}" → "${fixed.newImage}"`);
      });

      // Write the updated content back to the file
      fs.writeFileSync(locationsFilePath, locationsContent);
      console.log('\n✅ Updated locations.js with fixes.');
      console.log('Run this script again to verify the fixes.');
    } else if (missingImages.length > 0) {
      console.log('❌ No locations could be auto-fixed. Please add the missing images or update the locations manually.');
    }
  } else if (missingImages.some(m => m.alternatives.length > 0)) {
    console.log('\n💡 Run with --fix to automatically fix locations with available alternatives:');
    console.log('  node validateLocations.js --fix');
  }
} else {
  console.log('✅ All image files exist!');
}

// Print missing images by destination for easier analysis
if (missingImages.length > 0) {
  console.log('\n=== MISSING IMAGES BY DESTINATION ===\n');

  // Group by destination and area
  const groupedMissing = {};
  missingImages.forEach(missing => {
    const location = locationData.find(loc => loc.id === missing.id);
    const key = `${location.destination} - ${location.area}`;

    if (!groupedMissing[key]) {
      groupedMissing[key] = [];
    }

    groupedMissing[key].push(missing);
  });

  // Print groups
  Object.keys(groupedMissing).sort().forEach(key => {
    const items = groupedMissing[key];
    console.log(`${key}: ${items.length} missing images`);
    items.forEach(item => {
      console.log(`  - ID ${item.id}: ${item.imageUrl}`);
    });
  });
}

console.log('\n=== SUMMARY ===');
console.log('Total locations: ' + locationData.length);
console.log('Invalid references: ' + invalidLocations.length);
console.log('Missing images: ' + missingImages.length);
if (AUTO_FIX) {
  console.log('Fixed locations: ' + fixedLocations.length);
}

// Provide usage instructions
console.log('\n=== USAGE ===');
console.log('Run without parameters to validate locations:');
console.log('  node validateLocations.js');
console.log('Run with --fix to automatically fix missing images (if alternatives exist):');
console.log('  node validateLocations.js --fix');
