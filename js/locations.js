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
                { id: "sunken_isles", name: "Sunken Isles" },
                { id: "windswept_crag", name: "Windswept Crag" },
                { id: "the_farm", name: "The Farm" },
            ]
        },
        {
            id: "cosmodrome",
            name: "Cosmodrome",
            areas: [
                { id: "the_steppes", name: "The Steppes" },
                { id: "mothyards", name: "Mothyards" },
                { id: "skywatch", name: "Skywatch" },
                { id: "forgotten_shore", name: "Forgotten Shore" },
                { id: "the_breach", name: "The Breach" },
                { id: "the_divide", name: "The Divide" },
                { id: "lunar_complex", name: "Lunar Complex" },
                { id: "terrestrial_complex", name: "Terrestrial Complex" },
                { id: "the_grottos", name: "The Grottos" },
                { id: "grasp_of_avarice", name: "Grasp of Avarice" },
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
                { id: "landing", name: "The Landing" },
                { id: "blooming", name: "The Blooming" },
                { id: "impasse", name: "The Impasse" },
                { id: "transgression", name: "The Transgression" },
                { id: "lost_city", name: "The Lost City" },
                { id: "substratum", name: "Substratum" },
                { id: "maelstrom", name: "Maelstrom" },
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
                { id: "sanctuary", name: "Sanctuary" },
                { id: "scarlet_keep", name: "Scarlet Keep" },
                { id: "lunar_battlegrounds", name: "Lunar Battlegrounds" },
                { id: "necropolis", name: "Necropolis" },
                { id: "derelict_leviathan", name: "Derelict Leviathan" },
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
                { id: "vesper_station", name: "Vesper Station" },
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
                { id: "hallows", name: "Hallows" },
                { id: "sunkern_cavern", name: "Sunkern Cavern" },
                { id: "chamber_of_water", name: "Chamber of Water" },
                { id: "well_of_flame", name: "Well of Flame" },
                { id: "chamber_of_sky", name: "Chamber of Sky" },
            ]
        },
        {
            id: "throne_world",
            name: "Savathûn's Throne World",
            areas: [
                { id: "quagmire", name: "Quagmire" },
                { id: "miasma", name: "Miasma" },
                { id: "florescent_canal", name: "florescent Canal" },
                { id: "enclave", name: "The Enclave" },
                { id: "sunkern_pyramid", name: "Sunkern Pyramid" },
            ]
        },
        {
            id: "neomuna",
            name: "Neomuna",
            areas: [
                { id: "zephyr_concourse", name: "Zephyr Concourse" },
                { id: "ahimsa_park", name: "Ahimsa Park" },
                { id: "liming_harbor", name: "Liming Harbor" },
                { id: "striders_gate", name: "Striders' Gate" },
                { id: "veil_containment", name: "Veil Containment" },
                { id: "irkalla_complex", name: "Irkalla Complex" },
                { id: "esi_terminal", name: "Esi Terminal" },
                { id: "mayas_retreat", name: "Maya's Retreat" },
                { id: "typhon_imperator", name: "Typhon Imperator" },
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
                { id: "ascendant_plane", name: "Ascendant Plane" },
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
                { id: "fields_of_glass", name: "Fields of Glass" },
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
                { id: "ghosts_of_the_deep", name: "Ghosts of the Deep" },
            ]
        },
        {
            id: "mars",
            name: "Mars",
            areas: [
                { id: "ares_spire", name: "Ares Spire" },
                { id: "glacial_drift", name: "Glacial Drift" },
                { id: "braytech_futurescape", name: "Braytech Futurescape" },
                { id: "olympus_decent", name: "Olympus Decent" },
                { id: "alton_dynamo", name: "Alton Dynamo" },
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
        },
        {
            id: "dreadnaught",
            name: "The Dreadnaught",
            areas: [
                { id: "hull_breach", name: "Hull Breach" },
                { id: "mausoleum", name: "Mausoleum" },
                { id: "hall_of_souls", name: "Hall of Souls" },
            ]
        },
        {
            id: "venus",
            name: "Venus",
            areas: [
                { id: "ishtar_sink", name: "Ishtar Sink" },
                { id: "vault_of_glass", name: "Vault of Glass" },
            ]
        },
    ],
    locationData: [
        {
            id: 1,
            destination: "europa",
            area: "charons_crossing",
            imageUrl: "assets/locations/europa_charons_crossing_1.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 2,
            destination: "cosmodrome",
            area: "mothyards",
            imageUrl: "assets/locations/cosmodrome_mothyards_1.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 3,
            destination: "dreaming_city",
            area: "divalian_mists",
            imageUrl: "assets/locations/dreaming_city_divalian_mists_1.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 4,
            destination: "europa",
            area: "riis_reborn",
            imageUrl: "assets/locations/europa_riis_reborn_1.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 5,
            destination: "io",
            area: "lost_oasis",
            imageUrl: "assets/locations/io_lost_oasis_1.avif",
            difficulty: "hard",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 6,
            destination: "dreaming_city",
            area: "rheasilvia",
            imageUrl: "assets/locations/dreaming_city_rheasilvia_1.avif",
            difficulty: "medium",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 7,
            destination: "moon",
            area: "sorrows_harbor",
            imageUrl: "assets/locations/moon_sorrows_harbor_1.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 8,
            destination: "dreaming_city",
            area: "divalian_mists",
            imageUrl: "assets/locations/dreaming_city_divalian_mists_2.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 9,
            destination: "nessus",
            area: "the_cistern",
            imageUrl: "assets/locations/nessus_the_cistern_1.avif",
            difficulty: "hard",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 10,
            destination: "moon",
            area: "sorrows_harbor",
            imageUrl: "assets/locations/moon_sorrows_harbor_2.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 11,
            destination: "throne_world",
            area: "florescent_canal",
            imageUrl: "assets/locations/throne_world_florescent_canal_1.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 12,
            destination: "dreaming_city",
            area: "garden_esila",
            imageUrl: "assets/locations/dreaming_city_garden_esila_1.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 13,
            destination: "dreaming_city",
            area: "rheasilvia",
            imageUrl: "assets/locations/dreaming_city_rheasilvia_2.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 14,
            destination: "dreaming_city",
            area: "divalian_mists",
            imageUrl: "assets/locations/dreaming_city_divalian_mists_3.avif",
            difficulty: "hard",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 15,
            destination: "tangled_shore",
            area: "thieves_landing",
            imageUrl: "assets/locations/tangled_shore_thieves_landing_1.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 16,
            destination: "moon",
            area: "anchor_of_light",
            imageUrl: "assets/locations/moon_anchor_of_light_1.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 17,
            destination: "nessus",
            area: "artifact_edge",
            imageUrl: "assets/locations/nessus_artifact_edge_1.avif",
            difficulty: "medium",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 18,
            destination: "dreaming_city",
            area: "the_strand",
            imageUrl: "assets/locations/dreaming_city_the_strand_1.avif",
            difficulty: "medium",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 19,
            destination: "europa",
            area: "glassway",
            imageUrl: "assets/locations/europa_glassway_1.avif",
            difficulty: "medium",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 20,
            destination: "nessus",
            area: "artifact_edge",
            imageUrl: "assets/locations/nessus_artifact_edge_2.avif",
            difficulty: "medium",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 21,
            destination: "europa",
            area: "glassway",
            imageUrl: "assets/locations/europa_glassway_2.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 22,
            destination: "tangled_shore",
            area: "soriks_cut",
            imageUrl: "assets/locations/tangled_shore_soriks_cut_1.avif",
            difficulty: "medium",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 23,
            destination: "mercury",
            area: "infinite_forest",
            imageUrl: "assets/locations/mercury_infinite_forest_1.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 24,
            destination: "dreaming_city",
            area: "spine_of_keres",
            imageUrl: "assets/locations/dreaming_city_spine_of_keres_1.avif",
            difficulty: "hard",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 25,
            destination: "europa",
            area: "riis_reborn",
            imageUrl: "assets/locations/europa_riis_reborn_2.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 26,
            destination: "mercury",
            area: "fields_of_glass",
            imageUrl: "assets/locations/mercury_fields_of_glass_1.avif",
            difficulty: "hard",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 27,
            destination: "throne_world",
            area: "miasma",
            imageUrl: "assets/locations/throne_world_miasma_1.avif",
            difficulty: "hard",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 28,
            destination: "tangled_shore",
            area: "soriks_cut",
            imageUrl: "assets/locations/tangled_shore_soriks_cut_2.avif",
            difficulty: "medium",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 29,
            destination: "throne_world",
            area: "florescent_canal",
            imageUrl: "assets/locations/throne_world_florescent_canal_2.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 30,
            destination: "tangled_shore",
            area: "soriks_cut",
            imageUrl: "assets/locations/tangled_shore_soriks_cut_3.avif",
            difficulty: "hard",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 31,
            destination: "tangled_shore",
            area: "jetsam_saturn",
            imageUrl: "assets/locations/tangled_shore_jetsam_saturn_1.avif",
            difficulty: "medium",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 32,
            destination: "moon",
            area: "archers_line",
            imageUrl: "assets/locations/moon_archers_line_1.avif",
            difficulty: "medium",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 33,
            destination: "moon",
            area: "archers_line",
            imageUrl: "assets/locations/moon_archers_line_2.avif",
            difficulty: "medium",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 34,
            destination: "europa",
            area: "asterion_abyss",
            imageUrl: "assets/locations/europa_asterion_abyss_1.avif",
            difficulty: "medium",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 35,
            destination: "europa",
            area: "asterion_abyss",
            imageUrl: "assets/locations/europa_asterion_abyss_2.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 36,
            destination: "europa",
            area: "glassway",
            imageUrl: "assets/locations/europa_glassway_3.avif",
            difficulty: "hard",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 37,
            destination: "europa",
            area: "asterion_abyss",
            imageUrl: "assets/locations/europa_asterion_abyss_3.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 38,
            destination: "throne_world",
            area: "quagmire",
            imageUrl: "assets/locations/throne_world_quagmire_1.avif",
            difficulty: "medium",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 39,
            destination: "throne_world",
            area: "miasma",
            imageUrl: "assets/locations/throne_world_miasma_2.avif",
            difficulty: "medium",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 40,
            destination: "throne_world",
            area: "florescent_canal",
            imageUrl: "assets/locations/throne_world_florescent_canal_3.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 41,
            destination: "throne_world",
            area: "florescent_canal",
            imageUrl: "assets/locations/throne_world_florescent_canal_4.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 42,
            destination: "throne_world",
            area: "florescent_canal",
            imageUrl: "assets/locations/throne_world_florescent_canal_5.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 43,
            destination: "throne_world",
            area: "quagmire",
            imageUrl: "assets/locations/throne_world_quagmire_2.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 44,
            destination: "edz",
            area: "the_sludge",
            imageUrl: "assets/locations/edz_the_sludge_1.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 45,
            destination: "dreaming_city",
            area: "the_strand",
            imageUrl: "assets/locations/dreaming_city_the_strand_2.avif",
            difficulty: "medium",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 46,
            destination: "dreaming_city",
            area: "the_strand",
            imageUrl: "assets/locations/dreaming_city_the_strand_3.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 47,
            destination: "dreaming_city",
            area: "the_strand",
            imageUrl: "assets/locations/dreaming_city_the_strand_4.avif",
            difficulty: "hard",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 48,
            destination: "dreaming_city",
            area: "divalian_mists",
            imageUrl: "assets/locations/dreaming_city_divalian_mists_4.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 49,
            destination: "dreaming_city",
            area: "divalian_mists",
            imageUrl: "assets/locations/dreaming_city_divalian_mists_5.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 50,
            destination: "dreaming_city",
            area: "rheasilvia",
            imageUrl: "assets/locations/dreaming_city_rheasilvia_3.avif",
            difficulty: "hard",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 51,
            destination: "dreaming_city",
            area: "divalian_mists",
            imageUrl: "assets/locations/dreaming_city_divalian_mists_6.avif",
            difficulty: "hard",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 52,
            destination: "tangled_shore",
            area: "thieves_landing",
            imageUrl: "assets/locations/tangled_shore_thieves_landing_2.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 53,
            destination: "edz",
            area: "outskirts",
            imageUrl: "assets/locations/edz_outskirts_1.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 54,
            destination: "edz",
            area: "outskirts",
            imageUrl: "assets/locations/edz_outskirts_2.avif",
            difficulty: "medium",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 55,
            destination: "edz",
            area: "outskirts",
            imageUrl: "assets/locations/edz_outskirts_3.avif",
            difficulty: "medium",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 56,
            destination: "edz",
            area: "the_sludge",
            imageUrl: "assets/locations/edz_the_sludge_2.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 57,
            destination: "edz",
            area: "the_sludge",
            imageUrl: "assets/locations/edz_the_sludge_3.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 58,
            destination: "edz",
            area: "the_sludge",
            imageUrl: "assets/locations/edz_the_sludge_4.avif",
            difficulty: "medium",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 59,
            destination: "edz",
            area: "the_sludge",
            imageUrl: "assets/locations/edz_the_sludge_5.avif",
            difficulty: "medium",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 60,
            destination: "edz",
            area: "the_gulch",
            imageUrl: "assets/locations/edz_the_gulch_1.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 61,
            destination: "nessus",
            area: "artifact_edge",
            imageUrl: "assets/locations/nessus_artifact_edge_3.avif",
            difficulty: "medium",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 62,
            destination: "dreaming_city",
            area: "divalian_mists",
            imageUrl: "assets/locations/dreaming_city_divalian_mists_7.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 63,
            destination: "dreaming_city",
            area: "rheasilvia",
            imageUrl: "assets/locations/dreaming_city_rheasilvia_4.avif",
            difficulty: "medium",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 64,
            destination: "moon",
            area: "hellmouth",
            imageUrl: "assets/locations/moon_hellmouth_1.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 65,
            destination: "mercury",
            area: "infinite_forest",
            imageUrl: "assets/locations/mercury_infinite_forest_2.avif",
            difficulty: "medium",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 66,
            destination: "mercury",
            area: "infinite_forest",
            imageUrl: "assets/locations/mercury_infinite_forest_3.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 67,
            destination: "mercury",
            area: "infinite_forest",
            imageUrl: "assets/locations/mercury_infinite_forest_4.avif",
            difficulty: "medium",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 68,
            destination: "neomuna",
            area: "striders_gate",
            imageUrl: "assets/locations/neomuna_striders_gate_1.avif",
            difficulty: "medium",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 69,
            destination: "neomuna",
            area: "irkalla_complex",
            imageUrl: "assets/locations/neomuna_irkalla_complex_1.avif",
            difficulty: "hard",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 70,
            destination: "throne_world",
            area: "quagmire",
            imageUrl: "assets/locations/throne_world_quagmire_3.avif",
            difficulty: "medium",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 71,
            destination: "moon",
            area: "scarlet_keep",
            imageUrl: "assets/locations/moon_scarlet_keep_1.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 72,
            destination: "moon",
            area: "scarlet_keep",
            imageUrl: "assets/locations/moon_scarlet_keep_2.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 73,
            destination: "moon",
            area: "scarlet_keep",
            imageUrl: "assets/locations/moon_scarlet_keep_3.avif",
            difficulty: "medium",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 74,
            destination: "moon",
            area: "scarlet_keep",
            imageUrl: "assets/locations/moon_scarlet_keep_4.avif",
            difficulty: "hard",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 75,
            destination: "moon",
            area: "scarlet_keep",
            imageUrl: "assets/locations/moon_scarlet_keep_5.avif",
            difficulty: "medium",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 76,
            destination: "moon",
            area: "hellmouth",
            imageUrl: "assets/locations/moon_hellmouth_2.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 77,
            destination: "moon",
            area: "anchor_of_light",
            imageUrl: "assets/locations/moon_anchor_of_light_2.avif",
            difficulty: "hard",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 78,
            destination: "mars",
            area: "braytech_futurescape",
            imageUrl: "assets/locations/mars_braytech_futurescape_1.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 79,
            destination: "mars",
            area: "glacial_drift",
            imageUrl: "assets/locations/mars_glacial_drift_1.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 80,
            destination: "mercury",
            area: "fields_of_glass",
            imageUrl: "assets/locations/mercury_fields_of_glass_2.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 81,
            destination: "titan",
            area: "sirens_watch",
            imageUrl: "assets/locations/titan_sirens_watch_1.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 82,
            destination: "titan",
            area: "the_rig",
            imageUrl: "assets/locations/titan_the_rig_1.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 83,
            destination: "io",
            area: "the_rupture",
            imageUrl: "assets/locations/io_the_rupture_1.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 84,
            destination: "edz",
            area: "trostland",
            imageUrl: "assets/locations/edz_trostland_1.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 85,
            destination: "titan",
            area: "solarium",
            imageUrl: "assets/locations/titan_solarium_1.avif",
            difficulty: "hard",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 86,
            destination: "titan",
            area: "solarium",
            imageUrl: "assets/locations/titan_solarium_2.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 87,
            destination: "titan",
            area: "solarium",
            imageUrl: "assets/locations/titan_solarium_3.avif",
            difficulty: "hard",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 88,
            destination: "nessus",
            area: "exodus_black",
            imageUrl: "assets/locations/nessus_exodus_black_1.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 89,
            destination: "nessus",
            area: "exodus_black",
            imageUrl: "assets/locations/nessus_exodus_black_2.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 90,
            destination: "nessus",
            area: "exodus_black",
            imageUrl: "assets/locations/nessus_exodus_black_3.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 91,
            destination: "nessus",
            area: "exodus_black",
            imageUrl: "assets/locations/nessus_exodus_black_4.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 92,
            destination: "nessus",
            area: "exodus_black",
            imageUrl: "assets/locations/nessus_exodus_black_5.avif",
            difficulty: "hard",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 93,
            destination: "nessus",
            area: "artifact_edge",
            imageUrl: "assets/locations/nessus_artifact_edge_4.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 94,
            destination: "edz",
            area: "firebase_hades",
            imageUrl: "assets/locations/edz_firebase_hades_1.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 95,
            destination: "edz",
            area: "firebase_hades",
            imageUrl: "assets/locations/edz_firebase_hades_2.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 96,
            destination: "edz",
            area: "firebase_hades",
            imageUrl: "assets/locations/edz_firebase_hades_3.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 97,
            destination: "edz",
            area: "firebase_hades",
            imageUrl: "assets/locations/edz_firebase_hades_4.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 98,
            destination: "edz",
            area: "firebase_hades",
            imageUrl: "assets/locations/edz_firebase_hades_5.avif",
            difficulty: "hard",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 99,
            destination: "edz",
            area: "outskirts",
            imageUrl: "assets/locations/edz_outskirts_4.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 100,
            destination: "edz",
            area: "outskirts",
            imageUrl: "assets/locations/edz_outskirts_5.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 101,
            destination: "edz",
            area: "outskirts",
            imageUrl: "assets/locations/edz_outskirts_6.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 102,
            destination: "edz",
            area: "outskirts",
            imageUrl: "assets/locations/edz_outskirts_7.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 103,
            destination: "edz",
            area: "outskirts",
            imageUrl: "assets/locations/edz_outskirts_8.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 104,
            destination: "titan",
            area: "solarium",
            imageUrl: "assets/locations/titan_solarium_4.avif",
            difficulty: "hard",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 105,
            destination: "titan",
            area: "solarium",
            imageUrl: "assets/locations/titan_solarium_5.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 106,
            destination: "titan",
            area: "solarium",
            imageUrl: "assets/locations/titan_solarium_6.avif",
            difficulty: "hard",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 107,
            destination: "nessus",
            area: "glade_of_echoes",
            imageUrl: "assets/locations/nessus_glade_of_echoes_1.avif",
            difficulty: "hard",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 108,
            destination: "nessus",
            area: "glade_of_echoes",
            imageUrl: "assets/locations/nessus_glade_of_echoes_2.avif",
            difficulty: "hard",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 109,
            destination: "nessus",
            area: "glade_of_echoes",
            imageUrl: "assets/locations/nessus_glade_of_echoes_3.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 110,
            destination: "nessus",
            area: "glade_of_echoes",
            imageUrl: "assets/locations/nessus_glade_of_echoes_4.avif",
            difficulty: "hard",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 111,
            destination: "nessus",
            area: "glade_of_echoes",
            imageUrl: "assets/locations/nessus_glade_of_echoes_5.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 112,
            destination: "moon",
            area: "anchor_of_light",
            imageUrl: "assets/locations/moon_anchor_of_light_3.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 113,
            destination: "moon",
            area: "archers_line",
            imageUrl: "assets/locations/moon_archers_line_3.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 114,
            destination: "moon",
            area: "hellmouth",
            imageUrl: "assets/locations/moon_hellmouth_3.avif",
            difficulty: "hard",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 115,
            destination: "moon",
            area: "sorrows_harbor",
            imageUrl: "assets/locations/moon_sorrows_harbor_3.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 116,
            destination: "edz",
            area: "outskirts",
            imageUrl: "assets/locations/edz_outskirts_9.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 117,
            destination: "edz",
            area: "outskirts",
            imageUrl: "assets/locations/edz_outskirts_10.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 118,
            destination: "edz",
            area: "outskirts",
            imageUrl: "assets/locations/edz_outskirts_11.avif",
            difficulty: "hard",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 119,
            destination: "europa",
            area: "beyond",
            imageUrl: "assets/locations/europa_beyond_1.avif",
            difficulty: "easy",
            submittedBy: "OfficiallySp"
        },
        {
            id: 120,
            destination: "europa",
            area: "glassway",
            imageUrl: "assets/locations/europa_glassway_4.avif",
            difficulty: "easy",
            submittedBy: "OfficiallySp"
        },
        {
            id: 121,
            destination: "cosmodrome",
            area: "mothyards",
            imageUrl: "assets/locations/cosmodrome_mothyards_2.avif",
            difficulty: "easy",
            submittedBy: "u/Totally_Not_A_Bot_FR"
        },
        {
            id: 122,
            destination: "cosmodrome",
            area: "skywatch",
            imageUrl: "assets/locations/cosmodrome_skywatch_1.avif",
            difficulty: "easy",
            submittedBy: "u/Totally_Not_A_Bot_FR"
        },
        {
            id: 123,
            destination: "cosmodrome",
            area: "skywatch",
            imageUrl: "assets/locations/cosmodrome_skywatch_2.avif",
            difficulty: "easy",
            submittedBy: "u/Totally_Not_A_Bot_FR"
        },
        {
            id: 124,
            destination: "cosmodrome",
            area: "the_steppes",
            imageUrl: "assets/locations/cosmodrome_the_steppes_1.avif",
            difficulty: "easy",
            submittedBy: "u/Totally_Not_A_Bot_FR"
        },
        {
            id: 125,
            destination: "cosmodrome",
            area: "the_steppes",
            imageUrl: "assets/locations/cosmodrome_the_steppes_2.avif",
            difficulty: "hard",
            submittedBy: "u/Totally_Not_A_Bot_FR"
        },
        {
            id: 126,
            destination: "cosmodrome",
            area: "terrestrial_complex",
            imageUrl: "assets/locations/cosmodrome_terrestrial_complex_1.avif",
            difficulty: "medium",
            submittedBy: "u/Totally_Not_A_Bot_FR"
        },
        {
            id: 127,
            destination: "cosmodrome",
            area: "the_grottos",
            imageUrl: "assets/locations/cosmodrome_the_grottos_1.avif",
            difficulty: "easy",
            submittedBy: "u/Totally_Not_A_Bot_FR"
        },
        {
            id: 128,
            destination: "cosmodrome",
            area: "forgotten_shore",
            imageUrl: "assets/locations/cosmodrome_forgotten_shore_1.avif",
            difficulty: "easy",
            submittedBy: "u/Totally_Not_A_Bot_FR"
        },
        {
            id: 129,
            destination: "cosmodrome",
            area: "forgotten_shore",
            imageUrl: "assets/locations/cosmodrome_forgotten_shore_2.avif",
            difficulty: "easy",
            submittedBy: "u/Totally_Not_A_Bot_FR"
        },
        {
            id: 130,
            destination: "cosmodrome",
            area: "lunar_complex",
            imageUrl: "assets/locations/cosmodrome_lunar_complex_1.avif",
            difficulty: "medium",
            submittedBy: "u/Totally_Not_A_Bot_FR"
        },
        {
            id: 131,
            destination: "nessus",
            area: "artifact_edge",
            imageUrl: "assets/locations/nessus_artifact_edge_5.avif",
            difficulty: "medium",
            submittedBy: "u/Totally_Not_A_Bot_FR"
        },
        {
            id: 132,
            destination: "nessus",
            area: "chamber_of_water",
            imageUrl: "assets/locations/nessus_chamber_of_water_1.avif",
            difficulty: "hard",
            submittedBy: "u/Totally_Not_A_Bot_FR"
        },
        {
            id: 133,
            destination: "nessus",
            area: "exodus_blacksite",
            imageUrl: "assets/locations/nessus_exodus_black_6.avif",
            difficulty: "easy",
            submittedBy: "u/Totally_Not_A_Bot_FR"
        },
        {
            id: 134,
            destination: "nessus",
            area: "glade_of_echoes",
            imageUrl: "assets/locations/nessus_glade_of_echoes_6.avif",
            difficulty: "easy",
            submittedBy: "u/Totally_Not_A_Bot_FR"
        },
        {
            id: 135,
            destination: "nessus",
            area: "hallows",
            imageUrl: "assets/locations/nessus_hallows_1.avif",
            difficulty: "medium",
            submittedBy: "u/Totally_Not_A_Bot_FR"
        },
        {
            id: 136,
            destination: "nessus",
            area: "sunkern_cavern",
            imageUrl: "assets/locations/nessus_sunkern_cavern_1.avif",
            difficulty: "medium",
            submittedBy: "u/Totally_Not_A_Bot_FR"
        },
        {
            id: 137,
            destination: "nessus",
            area: "the_cistern",
            imageUrl: "assets/locations/nessus_the_cistern_2.avif",
            difficulty: "easy",
            submittedBy: "u/Totally_Not_A_Bot_FR"
        },
        {
            id: 138,
            destination: "nessus",
            area: "the_tangle",
            imageUrl: "assets/locations/nessus_the_tangle_1.avif",
            difficulty: "easy",
            submittedBy: "u/Totally_Not_A_Bot_FR"
        },
        {
            id: 139,
            destination: "nessus",
            area: "watchers_grave",
            imageUrl: "assets/locations/nessus_watchers_grave_1.avif",
            difficulty: "medium",
            submittedBy: "u/Totally_Not_A_Bot_FR"
        },
        {
            id: 140,
            destination: "nessus",
            area: "well_of_flame",
            imageUrl: "assets/locations/nessus_well_of_flame_1.avif",
            difficulty: "medium",
            submittedBy: "u/Totally_Not_A_Bot_FR"
        },
        {
            id: 141,
            destination: "nessus",
            area: "chamber_of_sky",
            imageUrl: "assets/locations/nessus_chamber_of_sky_1.avif",
            difficulty: "medium",
            submittedBy: "u/Totally_Not_A_Bot_FR"
        },
        {
            id: 142,
            destination: "nessus",
            area: "watchers_grave",
            imageUrl: "assets/locations/nessus_watchers_grave_2.avif",
            difficulty: "medium",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 143,
            destination: "tower",
            area: "annex",
            imageUrl: "assets/locations/tower_annex_1.avif",
            difficulty: "easy",
            submittedBy: "OfficiallySp"
        },
        {
            id: 144,
            destination: "pale_heart",
            area: "maelstrom",
            imageUrl: "assets/locations/pale_heart_maelstrom_1.avif",
            difficulty: "easy",
            submittedBy: "OfficiallySp"
        },
        {
            id: 145,
            destination: "venus",
            area: "vault_of_glass",
            imageUrl: "assets/locations/venus_vault_of_glass_1.avif",
            difficulty: "easy",
            submittedBy: "OfficiallySp"
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
