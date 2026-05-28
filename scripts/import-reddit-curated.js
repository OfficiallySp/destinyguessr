#!/usr/bin/env node
/**
 * Import curated Reddit screenshots into assets/locations + locations.js
 * Run: node scripts/import-reddit-curated.js
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const SRC_DIR = path.join(ROOT, "assets/locations/pending_review/reddit-curate");
const OUT_DIR = path.join(ROOT, "assets/locations");
const LOCATIONS_JS = path.join(ROOT, "js/locations.js");

/** @type {{ file: string, destination: string, area: string, difficulty: string, submittedBy: string }[]} */
const IMPORTS = [
  // u/CroadNation — https://www.reddit.com/r/destiny2/comments/162mrz7/
  { file: "162mrz7_CroadNation_ccfgk5vknmkb1.jpg", destination: "moon", area: "scarlet_keep", difficulty: "medium", submittedBy: "u/CroadNation" },
  { file: "162mrz7_CroadNation_e41mgmzsnmkb1.jpg", destination: "neomuna", area: "zephyr_concourse", difficulty: "medium", submittedBy: "u/CroadNation" },
  { file: "162mrz7_CroadNation_9dhc293qnmkb1.jpg", destination: "neomuna", area: "liming_harbor", difficulty: "medium", submittedBy: "u/CroadNation" },
  { file: "162mrz7_CroadNation_whp593wqnmkb1.jpg", destination: "europa", area: "creation", difficulty: "hard", submittedBy: "u/CroadNation" },
  { file: "162mrz7_CroadNation_com7ncivnmkb1.jpg", destination: "cosmodrome", area: "skywatch", difficulty: "easy", submittedBy: "u/CroadNation" },
  { file: "162mrz7_CroadNation_rnmmp3vvnmkb1.jpg", destination: "cosmodrome", area: "grasp_of_avarice", difficulty: "hard", submittedBy: "u/CroadNation" },
  { file: "162mrz7_CroadNation_l5t7hs6ynmkb1.jpg", destination: "nessus", area: "glade_of_echoes", difficulty: "medium", submittedBy: "u/CroadNation" },
  { file: "162mrz7_CroadNation_fb4qd4zznmkb1.jpg", destination: "nessus", area: "chamber_of_water", difficulty: "hard", submittedBy: "u/CroadNation" },
  { file: "162mrz7_CroadNation_1vcx7pu0omkb1.jpg", destination: "nessus", area: "sunkern_cavern", difficulty: "hard", submittedBy: "u/CroadNation" },
  { file: "162mrz7_CroadNation_xevjktrunmkb1.jpg", destination: "pale_heart", area: "blooming", difficulty: "medium", submittedBy: "u/CroadNation" },

  // u/FloydknightArt — https://www.reddit.com/r/destiny2/comments/1h4yokf/
  { file: "1h4yokf_FloydknightArt_jfgpdwwgng4e1.jpg", destination: "europa", area: "eventide_ruins", difficulty: "medium", submittedBy: "u/FloydknightArt" },
  { file: "1h4yokf_FloydknightArt_2no35wwgng4e1.jpg", destination: "europa", area: "cadmus_ridge", difficulty: "medium", submittedBy: "u/FloydknightArt" },
  { file: "1h4yokf_FloydknightArt_6zg8pwwgng4e1.jpg", destination: "throne_world", area: "florescent_canal", difficulty: "medium", submittedBy: "u/FloydknightArt" },
  { file: "1h4yokf_FloydknightArt_gpya9zwgng4e1.jpg", destination: "dreaming_city", area: "divalian_mists", difficulty: "medium", submittedBy: "u/FloydknightArt" },
  { file: "1h4yokf_FloydknightArt_hpt48xwgng4e1.jpg", destination: "dreaming_city", area: "rheasilvia", difficulty: "medium", submittedBy: "u/FloydknightArt" },
  { file: "1h4yokf_FloydknightArt_agsgawwgng4e1.jpg", destination: "dreaming_city", area: "garden_esila", difficulty: "medium", submittedBy: "u/FloydknightArt" },
  { file: "1h4yokf_FloydknightArt_v52snwwgng4e1.jpg", destination: "dreaming_city", area: "spine_of_keres", difficulty: "hard", submittedBy: "u/FloydknightArt" },
  { file: "1h4yokf_FloydknightArt_6g5qrywgng4e1.jpg", destination: "dreaming_city", area: "the_strand", difficulty: "medium", submittedBy: "u/FloydknightArt" },
  { file: "1h4yokf_FloydknightArt_ea9uhwwgng4e1.jpg", destination: "dreaming_city", area: "rheasilvia", difficulty: "hard", submittedBy: "u/FloydknightArt" },
  { file: "1h4yokf_FloydknightArt_xb8lbwwgng4e1.jpg", destination: "nessus", area: "the_cistern", difficulty: "medium", submittedBy: "u/FloydknightArt" },
  { file: "1h4yokf_FloydknightArt_tmdh0zwgng4e1.jpg", destination: "nessus", area: "artifact_edge", difficulty: "medium", submittedBy: "u/FloydknightArt" },
  { file: "1h4yokf_FloydknightArt_qh8uhwwgng4e1.jpg", destination: "nessus", area: "exodus_black", difficulty: "easy", submittedBy: "u/FloydknightArt" },
  { file: "1h4yokf_FloydknightArt_qqxokwwgng4e1.jpg", destination: "nessus", area: "hallows", difficulty: "hard", submittedBy: "u/FloydknightArt" },
  { file: "1h4yokf_FloydknightArt_4d4v8wwgng4e1.jpg", destination: "pale_heart", area: "impasse", difficulty: "hard", submittedBy: "u/FloydknightArt" },

  // u/Sallarran — https://www.reddit.com/r/destiny2/comments/18o0tbx/
  { file: "18o0tbx_Sallarran_fo7zcpk3iq7c1.jpg", destination: "leviathan", area: "royal_pools", difficulty: "medium", submittedBy: "u/Sallarran" },
  { file: "18o0tbx_Sallarran_cr5rlhn3iq7c1.jpg", destination: "unknown_space", area: "queens_court", difficulty: "hard", submittedBy: "u/Sallarran" },
  { file: "18o0tbx_Sallarran_s8uukqq3iq7c1.jpg", destination: "europa", area: "beyond", difficulty: "medium", submittedBy: "u/Sallarran" },
  { file: "18o0tbx_Sallarran_5cbip7t3iq7c1.jpg", destination: "tower", area: "courtyard", difficulty: "easy", submittedBy: "u/Sallarran" },
  { file: "18o0tbx_Sallarran_i83hlyu3iq7c1.jpg", destination: "europa", area: "eventide_ruins", difficulty: "easy", submittedBy: "u/Sallarran" },
  { file: "18o0tbx_Sallarran_n6n7xfw3iq7c1.jpg", destination: "unknown_space", area: "eternity", difficulty: "medium", submittedBy: "u/Sallarran" },
];

function nextIndex(prefix) {
  const re = new RegExp(`^${prefix}_(\\d+)\\.avif$`);
  let max = 0;
  for (const f of fs.readdirSync(OUT_DIR)) {
    const m = f.match(re);
    if (m) max = Math.max(max, Number(m[1]));
  }
  return max + 1;
}

function main() {
  let locJs = fs.readFileSync(LOCATIONS_JS, "utf8");
  const idMatch = locJs.match(/id: (\d+),\s*\n\s*destination: "unknown_space",\s*\n\s*area: "inverted_spire"/);
  const lastBlock = [...locJs.matchAll(/id: (\d+),/g)].pop();
  let nextId = lastBlock ? Number(lastBlock[1]) + 1 : 201;

  const entries = [];

  for (const item of IMPORTS) {
    const src = path.join(SRC_DIR, item.file);
    if (!fs.existsSync(src)) {
      console.error("Missing:", item.file);
      process.exit(1);
    }
    const prefix = `${item.destination}_${item.area}`;
    const num = nextIndex(prefix);
    const outName = `${prefix}_${num}.avif`;
    const outPath = path.join(OUT_DIR, outName);
    execSync(`npx --yes sharp-cli -i "${src}" -o "${outPath}"`, { stdio: "inherit" });
    const imageUrl = `assets/locations/${outName}`;
    entries.push({
      id: nextId++,
      ...item,
      imageUrl,
    });
    console.log("OK", outName);
  }

  const blocks = entries
    .map(
      (e) => `        {
            id: ${e.id},
            destination: "${e.destination}",
            area: "${e.area}",
            imageUrl: "${e.imageUrl}",
            difficulty: "${e.difficulty}",
            submittedBy: "${e.submittedBy}"
        }`
    )
    .join(",\n");

  locJs = locJs.replace(
    /(\s+id: 200,[\s\S]+?submittedBy: "@shotsofdestiny"\n\s+})\n(\s+]\n\};)/,
    `$1,\n${blocks}\n$2`
  );

  fs.writeFileSync(LOCATIONS_JS, locJs);
  console.log(`Added ${entries.length} locations (ids ${entries[0].id}–${entries[entries.length - 1].id})`);
}

main();
