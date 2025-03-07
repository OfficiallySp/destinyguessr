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
                { id: "the_blooming", name: "The Vault" },
                { id: "the_impasse", name: "The Wellspring" }
            ]
        },
        {
            id: "moon",
            name: "Moon",
            areas: [
                { id: "archer_line", name: "Archer's Line" },
                { id: "hellmouth", name: "Hellmouth" },
                { id: "anchor_of_light", name: "Anchor of Light" },
                { id: "sorrows_harbor", name: "Sorrow's Harbor" },
                { id: "scarlet_keep", name: "Scarlet Keep" },
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
                { id: "riis_reborn", name: "Riis-Reborn" }
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
                { id: "spine_of_keres", name: "Spine of Keres" },
                { id: "harbingers_seclude", name: "Harbinger's Seclude" },
                { id: "the_confluence", name: "The Confluence" },
                { id: "gardens_of_esila", name: "Gardens of Esila" },
            ]
        }
    ],

    // This array would be populated with actual location data once screenshots are available
    // For now, we have placeholder entries
    locationData: [
        {
            id: 1,
            destination: "throne_world",
            area: "miasma",
            imageUrl: "assets/locations/throne_world_miasma_1.png",
            difficulty: "easy"
        },
        {
            id: 2,
            destination: "europa",
            area: "asterion_abyss",
            imageUrl: "assets/locations/europa_asterion_abyss_1.png",
            difficulty: "medium"
        },
        {
            id: 3,
            destination: "tower",
            area: "hangar",
            imageUrl: "assets/locations/tower_hangar_1.png",
            difficulty: "hard"
        },
        {
            id: 4,
            destination: "europa",
            area: "eventide_ruins",
            imageUrl: "assets/locations/europa_eventide_ruins_1.png",
            difficulty: "medium"
        },
        {
            id: 5,
            destination: "throne_world",
            area: "enclave",
            imageUrl: "assets/locations/throne_world_enclave_1.png",
            difficulty: "hard"
        }
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
        title: "Guardian",
        minScore: 1000,
        description: "You're familiar with some locations, but there's still much to learn."
    },
    {
        title: "Veteran Guardian",
        minScore: 2000,
        description: "You've spent considerable time exploring the solar system!"
    },
    {
        title: "Vanguard Scout",
        minScore: 3000,
        description: "Your knowledge of Destiny 2 locations is impressive!"
    },
    {
        title: "Destination Expert",
        minScore: 4000,
        description: "Few Guardians know the solar system's secrets as well as you do!"
    },
    {
        title: "The Cartographer",
        minScore: 4500,
        description: "Your knowledge of every corner of Destiny 2 is virtually unmatched!"
    }
];
