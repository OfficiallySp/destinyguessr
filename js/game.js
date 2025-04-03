// DestinyGuessr - Game Logic

// Game state
let gameState = {
    currentRound: 1,
    totalRounds: 5,
    score: 0,
    currentLocation: null,
    guess: {
        destination: null,
        area: null
    },
    results: [],
    isRoundComplete: false
};

// DOM Elements
const locationImage = document.getElementById('location-image');
const currentRoundElement = document.getElementById('current-round');
const currentScoreElement = document.getElementById('current-score');
const destinationOptionsContainer = document.querySelector('.destination-options');
const areaOptionsContainer = document.querySelector('.area-options');
const step1Container = document.getElementById('step-1');
const step2Container = document.getElementById('step-2');
const submitGuessButton = document.getElementById('submit-guess');
const nextRoundButton = document.getElementById('next-round');
const resultFeedback = document.getElementById('result-feedback');

// Check if we should resume a game
const urlParams = new URLSearchParams(window.location.search);
const resumeGame = urlParams.get('resume') === 'true';

// Initialize the game
function initGame() {
    // Check if there's a saved game to resume
    if (resumeGame) {
        const savedGame = localStorage.getItem('destinyGuessr_gameState');
        if (savedGame) {
            gameState = JSON.parse(savedGame);
            updateUI();

            if (gameState.isRoundComplete) {
                showRoundResult();
            }
            return;
        }
    }

    // Start a new game
    resetGame();
    startNewRound();
}

// Reset the game to initial state
function resetGame() {
    gameState = {
        currentRound: 1,
        totalRounds: 5,
        score: 0,
        currentLocation: null,
        guess: {
            destination: null,
            area: null
        },
        results: [],
        isRoundComplete: false
    };

    // Set flag that a game is in progress
    localStorage.setItem('destinyGuessr_gameInProgress', 'true');
}

// Start a new round
function startNewRound() {
    // Reset round state
    gameState.guess.destination = null;
    gameState.guess.area = null;
    gameState.isRoundComplete = false;

    // Get a random location that hasn't been used yet
    gameState.currentLocation = getRandomLocation();

    // Update UI
    updateUI();

    // Save game state
    saveGameState();
}

// Get a random location that hasn't been used yet
function getRandomLocation() {
    // Get all used location IDs in current game
    const usedLocationIds = gameState.results.map(result => result.locationId);

    // Filter out used locations
    const availableLocations = locations.locationData.filter(location => !usedLocationIds.includes(location.id));

    // If we've used all locations, reset the pool
    let locationPool = availableLocations.length > 0 ? availableLocations : locations.locationData;

    // Pick a random location
    return locationPool[Math.floor(Math.random() * locationPool.length)];
}

// Update UI based on current game state
function updateUI() {
    // Update round counter
    currentRoundElement.textContent = gameState.currentRound;

    // Update score
    currentScoreElement.textContent = gameState.score;

    // Set location image
    if (gameState.currentLocation) {
        locationImage.src = gameState.currentLocation.imageUrl;

        // Fallback if image can't be loaded
        locationImage.onerror = function() {
            locationImage.src = 'assets/location_placeholder.png';
        };
    }

    // Generate destination options
    generateDestinationOptions();

    // Update button states
    updateButtonStates();

    // Hide result feedback
    resultFeedback.classList.add('hidden');
}

// Generate destination options
function generateDestinationOptions() {
    // Clear existing options
    destinationOptionsContainer.innerHTML = '';

    // Create a destination option for each destination
    locations.destinations.forEach(destination => {
        const option = document.createElement('div');
        option.className = 'destination-option';
        option.dataset.id = destination.id;
        option.textContent = destination.name;

        // If this destination is already selected, add selected class
        if (gameState.guess.destination === destination.id) {
            option.classList.add('selected');
            generateAreaOptions(destination.id);
            step2Container.classList.remove('hidden');
        }

        // Add click event listener
        option.addEventListener('click', function() {
            // Deselect all destinations
            document.querySelectorAll('.destination-option').forEach(opt => {
                opt.classList.remove('selected');
            });

            // Select this destination
            this.classList.add('selected');

            // Update game state
            gameState.guess.destination = destination.id;
            gameState.guess.area = null; // Reset area selection

            // Generate area options for this destination
            generateAreaOptions(destination.id);

            // Show step 2
            step2Container.classList.remove('hidden');

            // Update button states
            updateButtonStates();

            // Save game state
            saveGameState();
        });

        destinationOptionsContainer.appendChild(option);
    });
}

// Generate area options for a destination
function generateAreaOptions(destinationId) {
    // Clear existing options
    areaOptionsContainer.innerHTML = '';

    // Find destination
    const destination = locations.destinations.find(dest => dest.id === destinationId);

    // Create an area option for each area
    destination.areas.forEach(area => {
        const option = document.createElement('div');
        option.className = 'area-option';
        option.dataset.id = area.id;
        option.textContent = area.name;

        // If this area is already selected, add selected class
        if (gameState.guess.area === area.id) {
            option.classList.add('selected');
        }

        // Add click event listener
        option.addEventListener('click', function() {
            // Deselect all areas
            document.querySelectorAll('.area-option').forEach(opt => {
                opt.classList.remove('selected');
            });

            // Select this area
            this.classList.add('selected');

            // Update game state
            gameState.guess.area = area.id;

            // Update button states
            updateButtonStates();

            // Save game state
            saveGameState();
        });

        areaOptionsContainer.appendChild(option);
    });
}

// Update button states
function updateButtonStates() {
    // Submit button is enabled only if both destination and area are selected
    submitGuessButton.disabled = !(gameState.guess.destination && gameState.guess.area);

    // Next round button is visible only if round is complete
    if (gameState.isRoundComplete) {
        submitGuessButton.classList.add('hidden');
        nextRoundButton.classList.remove('hidden');
    } else {
        submitGuessButton.classList.remove('hidden');
        nextRoundButton.classList.add('hidden');
    }
}

// Submit guess
function submitGuess() {
    if (!gameState.guess.destination || !gameState.guess.area) {
        return;
    }

    // Calculate score for this round
    let roundScore = 0;
    let feedback = '';

    const correctDestination = gameState.currentLocation.destination;
    const correctArea = gameState.currentLocation.area;
    const guessedDestination = gameState.guess.destination;
    const guessedArea = gameState.guess.area;

    if (guessedDestination === correctDestination && guessedArea === correctArea) {
        // Perfect match
        roundScore = 1000;
        feedback = `<h3 class="correct">Perfect match! +${roundScore} points</h3>`;
        feedback += `<p>You correctly identified this location as ${getDestinationName(correctDestination)}, ${getAreaName(correctDestination, correctArea)}.</p>`;
    } else if (guessedDestination === correctDestination) {
        // Correct destination, wrong area
        roundScore = 500;
        feedback = `<h3 class="correct">Correct destination! +${roundScore} points</h3>`;
        feedback += `<p>You correctly identified this location as ${getDestinationName(correctDestination)}.</p>`;
        feedback += `<p>The specific area is ${getAreaName(correctDestination, correctArea)}.</p>`;
    } else {
        // Wrong destination
        roundScore = 0;
        feedback = `<h3 class="incorrect">Incorrect! +${roundScore} points</h3>`;
        feedback += `<p>This location is ${getDestinationName(correctDestination)}, ${getAreaName(correctDestination, correctArea)}.</p>`;
        feedback += `<p>You guessed ${getDestinationName(guessedDestination)}, ${getAreaName(guessedDestination, guessedArea)}.</p>`;
    }

    // Update score
    gameState.score += roundScore;

    // Save result
    gameState.results.push({
        locationId: gameState.currentLocation.id,
        correctDestination,
        correctArea,
        guessedDestination,
        guessedArea,
        score: roundScore
    });

    // Mark round as complete
    gameState.isRoundComplete = true;

    // Update UI
    currentScoreElement.textContent = gameState.score;
    updateButtonStates();

    // Show result feedback
    resultFeedback.innerHTML = feedback;
    resultFeedback.classList.remove('hidden');

    // Save game state
    saveGameState();
}

// Start next round or end game
function nextRound() {
    if (gameState.currentRound >= gameState.totalRounds) {
        // End game
        endGame();
    } else {
        // Increment round
        gameState.currentRound++;

        // Start new round
        startNewRound();
    }
}

// End game
function endGame() {
    // Save final score
    localStorage.setItem('destinyGuessr_finalScore', gameState.score);
    localStorage.setItem('destinyGuessr_results', JSON.stringify(gameState.results));

    // Remove game in progress flag
    localStorage.removeItem('destinyGuessr_gameInProgress');
    localStorage.removeItem('destinyGuessr_gameState');

    // Redirect to results page
    window.location.href = 'results.html';
}

// Helper function to get destination name
function getDestinationName(destinationId) {
    const destination = locations.destinations.find(dest => dest.id === destinationId);
    return destination ? destination.name : 'Unknown Destination';
}

// Helper function to get area name
function getAreaName(destinationId, areaId) {
    const destination = locations.destinations.find(dest => dest.id === destinationId);
    if (!destination) return 'Unknown Area';

    const area = destination.areas.find(a => a.id === areaId);
    return area ? area.name : 'Unknown Area';
}

// Show round result
function showRoundResult() {
    if (!gameState.isRoundComplete) return;

    const lastResult = gameState.results[gameState.results.length - 1];

    let feedback = '';
    if (lastResult.correctDestination === lastResult.guessedDestination &&
        lastResult.correctArea === lastResult.guessedArea) {
        // Perfect match
        feedback = `<h3 class="correct">Perfect match! +${lastResult.score} points</h3>`;
        feedback += `<p>You correctly identified this location as ${getDestinationName(lastResult.correctDestination)}, ${getAreaName(lastResult.correctDestination, lastResult.correctArea)}.</p>`;
    } else if (lastResult.correctDestination === lastResult.guessedDestination) {
        // Correct destination, wrong area
        feedback = `<h3 class="correct">Correct destination! +${lastResult.score} points</h3>`;
        feedback += `<p>You correctly identified this location as ${getDestinationName(lastResult.correctDestination)}.</p>`;
        feedback += `<p>The specific area is ${getAreaName(lastResult.correctDestination, lastResult.correctArea)}.</p>`;
    } else {
        // Wrong destination
        feedback = `<h3 class="incorrect">Incorrect! +${lastResult.score} points</h3>`;
        feedback += `<p>This location is ${getDestinationName(lastResult.correctDestination)}, ${getAreaName(lastResult.correctDestination, lastResult.correctArea)}.</p>`;
        feedback += `<p>You guessed ${getDestinationName(lastResult.guessedDestination)}, ${getAreaName(lastResult.guessedDestination, lastResult.guessedArea)}.</p>`;
    }

    // Show result feedback
    resultFeedback.innerHTML = feedback;
    resultFeedback.classList.remove('hidden');

    // Update button states
    updateButtonStates();
}

// Save game state to localStorage
function saveGameState() {
    localStorage.setItem('destinyGuessr_gameState', JSON.stringify(gameState));
}

// Event Listeners
if (submitGuessButton) {
    submitGuessButton.addEventListener('click', submitGuess);
}

if (nextRoundButton) {
    nextRoundButton.addEventListener('click', nextRound);
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', initGame);
