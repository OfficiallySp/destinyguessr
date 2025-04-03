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
                { id: "archer_line", name: "Archer's Line" },
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

    // This array would be populated with actual location data once screenshots are available
    // For now, we have placeholder entries
    locationData: [
        {
            id: 1,
            destination: "europa",
            area: "charons_crossing",
            imageUrl: "assets/locations/europa_charons_crossing_1.png",
            difficulty: "easy"
        },
        {
            id: 2,
            destination: "cosmodrome",
            area: "the_steppes",
            imageUrl: "assets/locations/cosmodrome_the_steppes_1.png",
            difficulty: "easy"
        },
        {
            id: 3,
            destination: "dreaming_city",
            area: "divalian_mists",
            imageUrl: "assets/locations/dreaming_city_divalian_mists_1.png",
            difficulty: "easy"
        },
        {
            id: 4,
            destination: "europa",
            area: "riis_reborn",
            imageUrl: "assets/locations/europa_riis_reborn_1.png",
            difficulty: "easy"
        },
        {
            id: 5,
            destination: "io",
            area: "lost_oasis",
            imageUrl: "assets/locations/io_lost_oasis_1.png",
            difficulty: "hard"
        },
        {
            id: 6,
            destination: "dreaming_city",
            area: "rheasilvia",
            imageUrl: "assets/locations/dreaming_city_rheasilvia_1.png",
            difficulty: "medium"
        },
        {
            id: 7,
            destination: "moon",
            area: "sorrows_harbor",
            imageUrl: "assets/locations/moon_sorrows_harbor_1.png",
            difficulty: "easy"
        },
        {
            id: 8,
            destination: "nessus",
            area: "the_cistern",
            imageUrl: "assets/locations/nessus_the_cistern_1.png",
            difficulty: "hard"
        },
        {
            id: 9,
            destination: "moon",
            area: "sorrows_harbor",
            imageUrl: "assets/locations/moon_sorrows_harbor_2.png",
            difficulty: "easy"
        },
        {
            id: 10,
            destination: "throne_world",
            area: "fluorescent_canal",
            imageUrl: "assets/locations/throne_world_fluorescent_canal_1.png",
            difficulty: "easy"
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
