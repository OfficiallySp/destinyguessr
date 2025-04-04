// DestinyGuessr - Locations Data

// This file contains the database of Destiny 2 locations for the game
// Each destination has a list of areas within it
// Each location has a unique ID, name, and path to its image

const locations = {
    destinations: [
        {
            id: "edz",
            name: "EDZ",
            areas: [
                { id: "outskirts", name: "Outskirts" },
                { id: "trostland", name: "Trostland" },
                { id: "winding_cove", name: "Winding Cove" },
                { id: "the_sludge", name: "The Sludge" },
                { id: "the_gulch", name: "The Gulch" },
                { id: "firebase_hades", name: "Firebase Hades" },
                { id: "sunken_isles", name: "Sunken Isles" }
            ]
        },
        {
            id: "cosmodrome",
            name: "Cosmodrome",
            areas: [
                { id: "the_steppes", name: "The Steppes" },
                { id: "mothyards", name: "Mothyards" },
                { id: "skywatch", name: "Skywatch" },
                { id: "forgotten_shore", name: "Forgotten Shore" }
            ]
        },
        {
            id: "tower",
            name: "Tower",
            areas: [
                { id: "courtyard", name: "Courtyard" },
                { id: "hangar", name: "Hangar" },
                { id: "bazaar", name: "Bazaar" },
                { id: "annex", name: "Annex" },
            ]
        },
        {
            id: "pale_heart",
            name: "The Pale Heart",
            areas: [
                { id: "the_landing", name: "The Landing" },
                { id: "the_blooming", name: "The Blooming" },
                { id: "the_impasse", name: "The Impasse" },
            ]
        },
        {
            id: "moon",
            name: "Moon",
            areas: [
                { id: "archers_line", name: "Archer's Line" },
                { id: "hellmouth", name: "Hellmouth" },
                { id: "anchor_of_light", name: "Anchor of Light" },
                { id: "sorrows_harbor", name: "Sorrow's Harbor" },
                { id: "sanctuary", name: "Sanctuary" }
            ]
        },
        {
            id: "europa",
            name: "Europa",
            areas: [
                { id: "eventide_ruins", name: "Eventide Ruins" },
                { id: "asterion_abyss", name: "Asterion Abyss" },
                { id: "cadmus_ridge", name: "Cadmus Ridge" },
                { id: "charons_crossing", name: "Charon's Crossing" },
                { id: "beyond", name: "Beyond" },
                { id: "riis_reborn", name: "Riis Reborn" },
                { id: "glassway", name: "The Glassway" },
            ]
        },
        {
            id: "nessus",
            name: "Nessus",
            areas: [
                { id: "exodus_black", name: "Exodus Black" },
                { id: "artifact_edge", name: "Artifact's Edge" },
                { id: "watcher_grave", name: "Watcher's Grave" },
                { id: "glade_of_echoes", name: "Glade of Echoes" },
                { id: "the_cistern", name: "The Cistern" },
                { id: "the_tangle", name: "The Tangle" },
                { id: "hallows", name: "Hallows" }
            ]
        },
        {
            id: "throne_world",
            name: "Savathûn's Throne World",
            areas: [
                { id: "quagmire", name: "Quagmire" },
                { id: "miasma", name: "Miasma" },
                { id: "fluorescent_canal", name: "Fluorescent Canal" },
                { id: "enclave", name: "The Enclave" },
            ]
        },
        {
            id: "neomuna",
            name: "Neomuna",
            areas: [
                { id: "zephyr_concourse", name: "Zephyr Concourse" },
                { id: "ahimsa_park", name: "Ahimsa Park" },
                { id: "liming_harbor", name: "Liming Harbor" },
                { id: "striders_gate", name: "Striders' Gate" }
            ]
        },
        {
            id: "dreaming_city",
            name: "The Dreaming City",
            areas: [
                { id: "divalian_mists", name: "Divalian Mists" },
                { id: "rheasilvia", name: "Rheasilvia" },
                { id: "the_strand", name: "The Strand" },
                { id: "spine_of_keres", name: "Spine of Keres" },
                { id: "harbingers_seclude", name: "Harbinger's Seclude" },
                { id: "the_confluence", name: "The Confluence" },
                { id: "garden_esila", name: "Gardens of Esila" },
            ]
        },
        {
            id: "io",
            name: "Io",
            areas: [
                { id: "lost_oasis", name: "Lost Oasis" },
                { id: "giants_scar", name: "Giant's Scar" },
                { id: "the_rupture", name: "The Rupture" },
                { id: "pyramidion", name: "Pyramidion" },
            ]
        },
        {
            id: "mercury",
            name: "Mercury",
            areas: [
                { id: "mercury", name: "Mercury" },
                { id: "infinite_forest", name: "The Infinite Forest" },
            ]
        },
        {
            id: "titan",
            name: "Titan",
            areas: [
                { id: "sirens_watch", name: "Siren's Watch" },
                { id: "the_rig", name: "The Rig" },
                { id: "solarium", name: "Solarium" },
            ]
        },
        {
            id: "tangled_shore",
            name: "The Tangled Shore",
            areas: [
                { id: "jetsam_saturn", name: "Jetsam of Saturn" },
                { id: "thieves_landing", name: "Thieves' Landing" },
                { id: "fourhorn_gulch", name: "Four-horn Gulch" },
                { id: "soriks_cut", name: "Soriks's Cut" },

            ]
        }
    ],

    locationData: [
        {
            id: 1,
            destination: "europa",
            area: "charons_crossing",
            imageUrl: "assets/locations/europa_charons_crossing_1.webp",
            difficulty: "easy"
        },
        {
            id: 2,
            destination: "cosmodrome",
            area: "the_steppes",
            imageUrl: "assets/locations/cosmodrome_the_steppes_1.webp",
            difficulty: "easy"
        },
        {
            id: 3,
            destination: "dreaming_city",
            area: "divalian_mists",
            imageUrl: "assets/locations/dreaming_city_divalian_mists_1.webp",
            difficulty: "easy"
        },
        {
            id: 4,
            destination: "europa",
            area: "riis_reborn",
            imageUrl: "assets/locations/europa_riis_reborn_1.webp",
            difficulty: "easy"
        },
        {
            id: 5,
            destination: "io",
            area: "lost_oasis",
            imageUrl: "assets/locations/io_lost_oasis_1.webp",
            difficulty: "hard"
        },
        {
            id: 6,
            destination: "dreaming_city",
            area: "rheasilvia",
            imageUrl: "assets/locations/dreaming_city_rheasilvia_1.webp",
            difficulty: "medium"
        },
        {
            id: 7,
            destination: "moon",
            area: "sorrows_harbor",
            imageUrl: "assets/locations/moon_sorrows_harbor_1.webp",
            difficulty: "easy"
        },
        {
            id: 8,
            destination: "dreaming_city",
            area: "divalian_mists",
            imageUrl: "assets/locations/dreaming_city_divalian_mists_2.webp",
            difficulty: "easy"
        },
        {
            id: 9,
            destination: "nessus",
            area: "the_cistern",
            imageUrl: "assets/locations/nessus_the_cistern_1.webp",
            difficulty: "hard"
        },
        {
            id: 10,
            destination: "moon",
            area: "sorrows_harbor",
            imageUrl: "assets/locations/moon_sorrows_harbor_2.webp",
            difficulty: "easy"
        },
        {
            id: 11,
            destination: "throne_world",
            area: "fluorescent_canal",
            imageUrl: "assets/locations/throne_world_fluorescent_canal_1.webp",
            difficulty: "easy"
        },
        {
            id: 12,
            destination: "dreaming_city",
            area: "garden_esila",
            imageUrl: "assets/locations/dreaming_city_garden_esila_1.webp",
            difficulty: "easy"
        },
        {
            id: 13,
            destination: "dreaming_city",
            area: "rheasilvia",
            imageUrl: "assets/locations/dreaming_city_rheasilvia_2.webp",
            difficulty: "easy"
        },
        {
            id: 14,
            destination: "dreaming_city",
            area: "divalian_mists",
            imageUrl: "assets/locations/dreaming_city_divalian_mists_3.webp",
            difficulty: "hard"
        },
        {
            id: 15,
            destination: "tangled_shore",
            area: "thieves_landing",
            imageUrl: "assets/locations/tangled_shore_thieves_landing_1.webp",
            difficulty: "easy"
        },
        {
            id: 16,
            destination: "moon",
            area: "anchor_of_light",
            imageUrl: "assets/locations/moon_anchor_of_light_1.webp",
            difficulty: "easy"
        },
        {
            id: 17,
            destination: "nessus",
            area: "artifact_edge",
            imageUrl: "assets/locations/nessus_artifact_edge_1.webp",
            difficulty: "medium"
        },
        {
            id: 18,
            destination: "dreaming_city",
            area: "the_strand",
            imageUrl: "assets/locations/dreaming_city_the_strand_1.webp",
            difficulty: "medium"
        },
        {
            id: 19,
            destination: "moon",
            area: "sorrows_harbor",
            imageUrl: "assets/locations/moon_sorrows_harbor_3.webp",
            difficulty: "medium"
        },
        {
            id: 20,
            destination: "europa",
            area: "glassway",
            imageUrl: "assets/locations/europa_glassway_1.webp",
            difficulty: "medium"
        },
        {
            id: 21,
            destination: "nessus",
            area: "artifact_edge",
            imageUrl: "assets/locations/nessus_artifact_edge_2.webp",
            difficulty: "medium"
        },
        {
            id: 22,
            destination: "europa",
            area: "glassway",
            imageUrl: "assets/locations/europa_glassway_2.webp",
            difficulty: "easy"
        },
        {
            id: 23,
            destination: "tangled_shore",
            area: "jetsam_saturn",
            imageUrl: "assets/locations/tangled_shore_jetsam_saturn_1.webp",
            difficulty: "hard"
        },
        {
            id: 24,
            destination: "throne_world",
            area: "miasma",
            imageUrl: "assets/locations/throne_world_miasma_1.webp",
            difficulty: "easy"
        },
        {
            id: 25,
            destination: "dreaming_city",
            area: "harbingers_seclude",
            imageUrl: "assets/locations/dreaming_city_harbingers_seclude_1.webp",
            difficulty: "medium"
        },
        {
            id: 26,
            destination: "dreaming_city",
            area: "harbingers_seclude",
            imageUrl: "assets/locations/dreaming_city_harbingers_seclude_2.webp",
            difficulty: "medium"
        },
        {
            id: 27,
            destination: "dreaming_city",
            area: "spine_of_keres",
            imageUrl: "assets/locations/dreaming_city_spine_of_keres_1.webp",
            difficulty: "hard"
        },
        {
            id: 28,
            destination: "dreaming_city",
            area: "spine_of_keres",
            imageUrl: "assets/locations/dreaming_city_spine_of_keres_2.webp",
            difficulty: "medium"
        },
        {
            id: 29,
            destination: "tangled_shore",
            area: "soriks_cut",
            imageUrl: "assets/locations/tangled_shore_soriks_cut_1.webp",
            difficulty: "medium"
        },
        {
            id: 30,
            destination: "throne_world",
            area: "fluorescent_canal",
            imageUrl: "assets/locations/throne_world_fluorescent_canal_2.webp",
            difficulty: "easy"
        },
        {
            id: 31,
            destination: "tangled_shore",
            area: "soriks_cut",
            imageUrl: "assets/locations/tangled_shore_soriks_cut_2.webp",
            difficulty: "medium"
        },
        {
            id: 32,
            destination: "tangled_shore",
            area: "jetsam_saturn",
            imageUrl: "assets/locations/tangled_shore_jetsam_saturn_2.webp",
            difficulty: "medium"
        },
        {
            id: 33,
            destination: "moon",
            area: "archers_line",
            imageUrl: "assets/locations/moon_archers_line_1.webp",
            difficulty: "medium"
        },
        {
            id: 34,
            destination: "moon",
            area: "archers_line",
            imageUrl: "assets/locations/moon_archers_line_2.webp",
            difficulty: "medium"
        },
        {
            id: 35,
            destination: "europa",
            area: "asterion_abyss",
            imageUrl: "assets/locations/europa_asterion_abyss_1.webp",
            difficulty: "medium"
        },
        {
            id: 36,
            destination: "europa",
            area: "asterion_abyss",
            imageUrl: "assets/locations/europa_asterion_abyss_2.webp",
            difficulty: "easy"
        },
        {
            id: 37,
            destination: "europa",
            area: "glassway",
            imageUrl: "assets/locations/europa_glassway_3.webp",
            difficulty: "hard"
        },
        {
            id: 38,
            destination: "europa",
            area: "asterion_abyss",
            imageUrl: "assets/locations/europa_asterion_abyss_3.webp",
            difficulty: "easy"
        },
        {
            id: 39,
            destination: "throne_world",
            area: "quagmire",
            imageUrl: "assets/locations/throne_world_quagmire_1.webp",
            difficulty: "medium"
        },
        {
            id: 40,
            destination: "throne_world",
            area: "miasma",
            imageUrl: "assets/locations/throne_world_miasma_2.webp",
            difficulty: "hard"
        },
        {
            id: 41,
            destination: "throne_world",
            area: "fluorescent_canal",
            imageUrl: "assets/locations/throne_world_fluorescent_canal_3.webp",
            difficulty: "easy"
        },
        {
            id: 42,
            destination: "throne_world",
            area: "fluorescent_canal",
            imageUrl: "assets/locations/throne_world_fluorescent_canal_4.webp",
            difficulty: "easy"
        },
        {
            id: 43,
            destination: "throne_world",
            area: "fluorescent_canal",
            imageUrl: "assets/locations/throne_world_fluorescent_canal_5.webp",
            difficulty: "easy"
        },
        {
            id: 44,
            destination: "throne_world",
            area: "quagmire",
            imageUrl: "assets/locations/throne_world_quagmire_2.webp",
            difficulty: "easy"
        },
        {
            id: 45,
            destination: "throne_world",
            area: "quagmire",
            imageUrl: "assets/locations/throne_world_quagmire_3.webp",
            difficulty: "easy"
        },
        {
            id: 46,
            destination: "dreaming_city",
            area: "the_strand",
            imageUrl: "assets/locations/dreaming_city_the_strand_2.webp",
            difficulty: "medium"
        },
        {
            id: 47,
            destination: "dreaming_city",
            area: "the_strand",
            imageUrl: "assets/locations/dreaming_city_the_strand_3.webp",
            difficulty: "easy"
        },
        {
            id: 48,
            destination: "europa",
            area: "glassway",
            imageUrl: "assets/locations/europa_glassway_4.webp",
            difficulty: "hard"
        },
        {
            id: 49,
            destination: "dreaming_city",
            area: "divalian_mists",
            imageUrl: "assets/locations/dreaming_city_divalian_mists_4.webp",
            difficulty: "easy"
        },
        {
            id: 50,
            destination: "dreaming_city",
            area: "divalian_mists",
            imageUrl: "assets/locations/dreaming_city_divalian_mists_5.webp",
            difficulty: "easy"
        },
        {
            id: 51,
            destination: "dreaming_city",
            area: "rheasilvia",
            imageUrl: "assets/locations/dreaming_city_rheasilvia_3.webp",
            difficulty: "hard"
        },
        {
            id: 52,
            destination: "dreaming_city",
            area: "divalian_mists",
            imageUrl: "assets/locations/dreaming_city_divalian_mists_6.webp",
            difficulty: "hard"
        },
        {
            id: 53,
            destination: "tangled_shore",
            area: "thieves_landing",
            imageUrl: "assets/locations/tangled_shore_thieves_landing_2.webp",
            difficulty: "easy"
        },
        {
            id: 54,
            destination: "edz",
            area: "outskirts",
            imageUrl: "assets/locations/edz_outskirts_1.webp",
            difficulty: "easy"
        },
        {
            id: 55,
            destination: "edz",
            area: "outskirts",
            imageUrl: "assets/locations/edz_outskirts_2.webp",
            difficulty: "medium"
        },
        {
            id: 56,
            destination: "edz",
            area: "outskirts",
            imageUrl: "assets/locations/edz_outskirts_3.webp",
            difficulty: "medium"
        },
        {
            id: 57,
            destination: "edz",
            area: "the_sludge",
            imageUrl: "assets/locations/edz_the_sludge_1.webp",
            difficulty: "easy"
        },
        {
            id: 58,
            destination: "edz",
            area: "the_sludge",
            imageUrl: "assets/locations/edz_the_sludge_2.webp",
            difficulty: "easy"
        },
        {
            id: 59,
            destination: "edz",
            area: "the_sludge",
            imageUrl: "assets/locations/edz_the_sludge_3.webp",
            difficulty: "medium"
        },
        {
            id: 60,
            destination: "edz",
            area: "the_sludge",
            imageUrl: "assets/locations/edz_the_sludge_4.webp",
            difficulty: "medium"
        },
        {
            id: 61,
            destination: "edz",
            area: "the_gulch",
            imageUrl: "assets/locations/edz_the_gulch_1.webp",
            difficulty: "easy"
        },
        {
            id: 62,
            destination: "dreaming_city",
            area: "spine_of_keres",
            imageUrl: "assets/locations/dreaming_city_spine_of_keres_3.webp",
            difficulty: "hard"
        },
        {
            id: 63,
            destination: "europa",
            area: "eventide_ruins",
            imageUrl: "assets/locations/europa_eventide_ruins_1.webp",
            difficulty: "medium"
        },
        {
            id: 64,
            destination: "europa",
            area: "eventide_ruins",
            imageUrl: "assets/locations/europa_eventide_ruins_2.webp",
            difficulty: "medium"
        },
        {
            id: 65,
            destination: "dreaming_city",
            area: "rheasilvia",
            imageUrl: "assets/locations/dreaming_city_rheasilvia_4.webp",
            difficulty: "medium"
        },
        {
            id: 66,
            destination: "moon",
            area: "hellmouth",
            imageUrl: "assets/locations/moon_hellmouth_1.webp",
            difficulty: "easy"
        },
        {
            id: 67,
            destination: "mercury",
            area: "infinite_forest",
            imageUrl: "assets/locations/mercury_infinite_forest_1.webp",
            difficulty: "medium"
        },
        {
            id: 68,
            destination: "mercury",
            area: "infinite_forest",
            imageUrl: "assets/locations/mercury_infinite_forest_2.webp",
            difficulty: "easy"
        },
        {
            id: 69,
            destination: "mercury",
            area: "infinite_forest",
            imageUrl: "assets/locations/mercury_infinite_forest_3.webp",
            difficulty: "medium"
        },
        {
            id: 70,
            destination: "neomuna",
            area: "the_wellspring",
            imageUrl: "assets/locations/neomuna_the_wellspring_1.webp",
            difficulty: "medium"
        },
        {
            id: 71,
            destination: "neomuna",
            area: "zephyr_concourse",
            imageUrl: "assets/locations/neomuna_zephyr_concourse_1.webp",
            difficulty: "hard"
        },
        {
            id: 72,
            destination: "neomuna",
            area: "zephyr_concourse",
            imageUrl: "assets/locations/neomuna_zephyr_concourse_2.webp",
            difficulty: "hard"
        },

    ]
};
// Ranks based on score performance
const guardianRanks = [
    {
        title: "New Light",
        minScore: 0,
        description: "You're just getting started with Destiny 2 locations. Keep exploring!"
    },
    {
        title: "Explorer",
        minScore: 500,
        description: "You're familiar with some locations, but there's still much to learn."
    },
    {
        title: "Initiate",
        minScore: 1000,
        description: "You've spent considerable time exploring the solar system!"
    },
    {
        title: "Scout",
        minScore: 1500,
        description: "Your knowledge of Destiny 2 locations is impressive!"
    },
    {
        title: "Adventurer",
        minScore: 2000,
        description: "Few Guardians know the solar system's secrets as well as you do!"
    },
    {
        title: "Veteran",
        minScore: 2500,
        description: "Your knowledge of every corner of Destiny 2 is virtually unmatched!"
    },
    {
        title: "Elite",
        minScore: 3000,
        description: "You've mastered the art of Destiny 2 locations!"
    },
    {
        title: "Justiciar",
        minScore: 3500,
        description: "You've become a guardian of the solar system!"
    },
    {
        title: "Vanquisher",
        minScore: 4000,
        description: "Your location knowledge would make Lord Shaxx proud! You vanquish all challenges!"
    },
    {
        title: "Exemplar",
        minScore: 4500,
        description: "You are an exemplar of location knowledge, a beacon for other Guardians to follow!"
    },
    {
        title: "Paragon",
        minScore: 5000,
        description: "The Vanguard should hire you as their cartographer! Your knowledge is legendary!"
    },
];
