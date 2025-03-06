// DestinyGuessr - Locations Data

// This file contains the database of Destiny 2 locations for the game
// Each destination has a list of areas within it
// Each location has a unique ID, name, and path to its image

const locations = {
    destinations: [
        {
            id: "earth",
            name: "Earth",
            areas: [
                { id: "edz", name: "European Dead Zone" },
                { id: "cosmodrome", name: "Cosmodrome" },
                { id: "tower", name: "The Tower" },
                { id: "helm", name: "The H.E.L.M." },
                { id: "last_city", name: "The Last City" }
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
                { id: "shrine_of_oryx", name: "Shrine of Oryx" }
            ]
        },
        {
            id: "europa",
            name: "Europa",
            areas: [
                { id: "eventide_ruins", name: "Eventide Ruins" },
                { id: "asterion_abyss", name: "Asterion Abyss" },
                { id: "cadmus_ridge", name: "Cadmus Ridge" },
                { id: "bray_exoscience", name: "Bray Exoscience" },
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
                { id: "cistern", name: "The Cistern" }
            ]
        },
        {
            id: "throne_world",
            name: "Savathûn's Throne World",
            areas: [
                { id: "quagmire", name: "Quagmire" },
                { id: "miasma", name: "Miasma" },
                { id: "fluorescent_canal", name: "Fluorescent Canal" },
                { id: "temple_of_the_cunning", name: "Temple of the Cunning" },
                { id: "altar_of_reflection", name: "Altar of Reflection" }
            ]
        },
        {
            id: "neomuna",
            name: "Neomuna",
            areas: [
                { id: "zephyr_concourse", name: "Zephyr Concourse" },
                { id: "ahimsa_park", name: "Ahimsa Park" },
                { id: "liming_harbor", name: "Liming Harbor" },
                { id: "radiosidian_district", name: "Radiosidian District" },
                { id: "strider_straits", name: "Strider's Straits" }
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
                { id: "the_confluence", name: "The Confluence" }
            ]
        }
    ],

    // This array would be populated with actual location data once screenshots are available
    // For now, we have placeholder entries
    locationData: [
        {
            id: 1,
            destination: "earth",
            area: "edz",
            imageUrl: "assets/locations/earth_edz_1.jpg",
            difficulty: "easy"
        },
        {
            id: 2,
            destination: "moon",
            area: "hellmouth",
            imageUrl: "assets/locations/moon_hellmouth_1.jpg",
            difficulty: "medium"
        },
        {
            id: 3,
            destination: "europa",
            area: "asterion_abyss",
            imageUrl: "assets/locations/europa_asterion_abyss_1.jpg",
            difficulty: "hard"
        }
        // Additional location entries would be added here as screenshots are collected
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
