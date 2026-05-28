// DestinyGuessr - Screenshot database and scoring ranks.
// Destination/area catalog: js/destinations.js (loaded before this file).

const locations = {
    destinations: destinyDestinations,
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
            area: "asterion_abyss",
            imageUrl: "assets/locations/europa_asterion_abyss_4.avif",
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
            area: "fourhorn_gulch",
            imageUrl: "assets/locations/tangled_shore_fourhorn_gulch_1.avif",
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
            imageUrl: "assets/locations/dreaming_city_the_strand_5.avif",
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
            area: "necropolis",
            imageUrl: "assets/locations/moon_sorrows_harbor_5.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 73,
            destination: "moon",
            area: "sorrows_harbor",
            imageUrl: "assets/locations/moon_sorrows_harbor_4.avif",
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
            area: "arboretum",
            imageUrl: "assets/locations/titan_arboretum_1.avif",
            difficulty: "hard",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 86,
            destination: "titan",
            area: "arboretum",
            imageUrl: "assets/locations/titan_arboretum_2.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 87,
            destination: "titan",
            area: "arboretum",
            imageUrl: "assets/locations/titan_arboretum_3.avif",
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
            area: "festering_halls",
            imageUrl: "assets/locations/titan_festering_halls_1.avif",
            difficulty: "hard",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 105,
            destination: "titan",
            area: "festering_halls",
            imageUrl: "assets/locations/titan_festering_halls_2.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 106,
            destination: "titan",
            area: "festering_halls",
            imageUrl: "assets/locations/titan_festering_halls_3.avif",
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
            area: "sanctuary",
            imageUrl: "assets/locations/moon_sanctuary_1.avif",
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
            area: "sojourners_camp",
            imageUrl: "assets/locations/edz_sojourners_camp_1.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 117,
            destination: "edz",
            area: "sojourners_camp",
            imageUrl: "assets/locations/edz_sojourners_camp_2.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 118,
            destination: "edz",
            area: "sojourners_camp",
            imageUrl: "assets/locations/edz_sojourners_camp_3.avif",
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
            imageUrl: "assets/locations/nessus_the_cistern_8.avif",
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
            area: "exodus_black",
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
        },
        {
            id: 146,
            destination: "tower",
            area: "hangar",
            imageUrl: "assets/locations/tower_hangar_1.avif",
            difficulty: "easy",
            submittedBy: "OfficiallySp"
        },
        {
            id: 147,
            destination: "cosmodrome",
            area: "skywatch",
            imageUrl: "assets/locations/cosmodrome_skywatch_3.avif",
            difficulty: "hard",
            submittedBy: "OfficiallySp"
        },
        {
            id: 148,
            destination: "edz",
            area: "salt_mines",
            imageUrl: "assets/locations/edz_salt_mines_1.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 149,
            destination: "edz",
            area: "salt_mines",
            imageUrl: "assets/locations/edz_salt_mines_2.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 150,
            destination: "edz",
            area: "salt_mines",
            imageUrl: "assets/locations/edz_salt_mines_3.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 151,
            destination: "edz",
            area: "maevic_square",
            imageUrl: "assets/locations/edz_maevic_square_1.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 152,
            destination: "edz",
            area: "maevic_square",
            imageUrl: "assets/locations/edz_maevic_square_2.avif",
            difficulty: "hard",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 153,
            destination: "edz",
            area: "maevic_square",
            imageUrl: "assets/locations/edz_maevic_square_3.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 154,
            destination: "titan",
            area: "solarium",
            imageUrl: "assets/locations/titan_solarium_1.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 155,
            destination: "titan",
            area: "sinking_docks",
            imageUrl: "assets/locations/titan_sinking_docks_1.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 156,
            destination: "titan",
            area: "sinking_docks",
            imageUrl: "assets/locations/titan_sinking_docks_2.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 157,
            destination: "titan",
            area: "sinking_docks",
            imageUrl: "assets/locations/titan_sinking_docks_3.avif",
            difficulty: "hard",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 158,
            destination: "titan",
            area: "sirens_watch",
            imageUrl: "assets/locations/titan_sirens_watch_2.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 159,
            destination: "titan",
            area: "sirens_watch",
            imageUrl: "assets/locations/titan_sirens_watch_3.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 160,
            destination: "titan",
            area: "sirens_watch",
            imageUrl: "assets/locations/titan_sirens_watch_4.avif",
            difficulty: "hard",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 161,
            destination: "titan",
            area: "sirens_watch",
            imageUrl: "assets/locations/titan_sirens_watch_5.avif",
            difficulty: "hard",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 162,
            destination: "edz",
            area: "sunken_isles",
            imageUrl: "assets/locations/edz_sunken_isles_1.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 163,
            destination: "edz",
            area: "sunken_isles",
            imageUrl: "assets/locations/edz_sunken_isles_2.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 164,
            destination: "edz",
            area: "sunken_isles",
            imageUrl: "assets/locations/edz_sunken_isles_3.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 165,
            destination: "edz",
            area: "winding_cove",
            imageUrl: "assets/locations/edz_winding_cove_1.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 166,
            destination: "edz",
            area: "winding_cove",
            imageUrl: "assets/locations/edz_winding_cove_2.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 167,
            destination: "nessus",
            area: "the_cistern",
            imageUrl: "assets/locations/nessus_the_cistern_3.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 168,
            destination: "nessus",
            area: "the_cistern",
            imageUrl: "assets/locations/nessus_the_cistern_4.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 169,
            destination: "nessus",
            area: "the_cistern",
            imageUrl: "assets/locations/nessus_the_cistern_5.avif",
            difficulty: "hard",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 170,
            destination: "nessus",
            area: "the_cistern",
            imageUrl: "assets/locations/nessus_the_cistern_6.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 171,
            destination: "nessus",
            area: "the_cistern",
            imageUrl: "assets/locations/nessus_the_cistern_7.avif",
            difficulty: "hard",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 172,
            destination: "titan",
            area: "the_rig",
            imageUrl: "assets/locations/titan_the_rig_2.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 173,
            destination: "titan",
            area: "the_rig",
            imageUrl: "assets/locations/titan_the_rig_3.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 174,
            destination: "titan",
            area: "the_rig",
            imageUrl: "assets/locations/titan_the_rig_4.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 175,
            destination: "titan",
            area: "the_rig",
            imageUrl: "assets/locations/titan_the_rig_5.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 176,
            destination: "titan",
            area: "the_rig",
            imageUrl: "assets/locations/titan_the_rig_6.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 177,
            destination: "titan",
            area: "tidal_anchor",
            imageUrl: "assets/locations/titan_tidal_anchor_1.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 178,
            destination: "titan",
            area: "tidal_anchor",
            imageUrl: "assets/locations/titan_tidal_anchor_2.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 179,
            destination: "edz",
            area: "trostland",
            imageUrl: "assets/locations/edz_trostland_2.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 180,
            destination: "edz",
            area: "trostland",
            imageUrl: "assets/locations/edz_trostland_3.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 181,
            destination: "edz",
            area: "trostland",
            imageUrl: "assets/locations/edz_trostland_4.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 182,
            destination: "edz",
            area: "trostland",
            imageUrl: "assets/locations/edz_trostland_5.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 183,
            destination: "edz",
            area: "trostland",
            imageUrl: "assets/locations/edz_trostland_6.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 184,
            destination: "edz",
            area: "the_sludge",
            imageUrl: "assets/locations/edz_the_sludge_6.avif",
            difficulty: "hard",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 185,
            destination: "edz",
            area: "the_sludge",
            imageUrl: "assets/locations/edz_the_sludge_7.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 186,
            destination: "edz",
            area: "the_sludge",
            imageUrl: "assets/locations/edz_the_sludge_8.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 187,
            destination: "edz",
            area: "the_gulch",
            imageUrl: "assets/locations/edz_the_gulch_2.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 188,
            destination: "edz",
            area: "the_gulch",
            imageUrl: "assets/locations/edz_the_gulch_3.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 189,
            destination: "edz",
            area: "the_gulch",
            imageUrl: "assets/locations/edz_the_gulch_4.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 190,
            destination: "edz",
            area: "the_tunnels",
            imageUrl: "assets/locations/edz_the_tunnels_1.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 191,
            destination: "edz",
            area: "the_tunnels",
            imageUrl: "assets/locations/edz_the_tunnels_2.avif",
            difficulty: "hard",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 192,
            destination: "mercury",
            area: "fields_of_glass",
            imageUrl: "assets/locations/mercury_fields_of_glass_3.avif",
            difficulty: "medium",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 193,
            destination: "io",
            area: "the_rupture",
            imageUrl: "assets/locations/io_the_rupture_2.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 194,
            destination: "titan",
            area: "the_rig",
            imageUrl: "assets/locations/titan_the_rig_7.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 195,
            destination: "mars",
            area: "braytech_futurescape",
            imageUrl: "assets/locations/mars_braytech_futurescape_2.avif",
            difficulty: "easy",
            submittedBy: "bray.tech public repo"
        },
        {
            id: 196,
            destination: "io",
            area: "giants_scar",
            imageUrl: "assets/locations/io_giants_scar_1.avif",
            difficulty: "hard",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 197,
            destination: "unknown_space",
            area: "eternity",
            imageUrl: "assets/locations/unknown_space_eternity_1.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 198,
            destination: "unknown_space",
            area: "eternity",
            imageUrl: "assets/locations/unknown_space_eternity_2.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 199,
            destination: "unknown_space",
            area: "eternity",
            imageUrl: "assets/locations/unknown_space_eternity_3.avif",
            difficulty: "medium",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 200,
            destination: "nessus",
            area: "inverted_spire",
            imageUrl: "assets/locations/nessus_inverted_spire_1.avif",
            difficulty: "easy",
            submittedBy: "@shotsofdestiny"
        },
        {
            id: 201,
            destination: "moon",
            area: "scarlet_keep",
            imageUrl: "assets/locations/moon_scarlet_keep_6.avif",
            difficulty: "medium",
            submittedBy: "u/CroadNation"
        },
        {
            id: 202,
            destination: "neomuna",
            area: "striders_gate",
            imageUrl: "assets/locations/neomuna_zephyr_concourse_1.avif",
            difficulty: "medium",
            submittedBy: "u/CroadNation"
        },
        {
            id: 203,
            destination: "neomuna",
            area: "liming_harbor",
            imageUrl: "assets/locations/neomuna_liming_harbor_1.avif",
            difficulty: "medium",
            submittedBy: "u/CroadNation"
        },
        {
            id: 204,
            destination: "europa",
            area: "creation",
            imageUrl: "assets/locations/europa_creation_1.avif",
            difficulty: "hard",
            submittedBy: "u/CroadNation"
        },
        {
            id: 205,
            destination: "cosmodrome",
            area: "skywatch",
            imageUrl: "assets/locations/cosmodrome_skywatch_4.avif",
            difficulty: "easy",
            submittedBy: "u/CroadNation"
        },
        {
            id: 206,
            destination: "cosmodrome",
            area: "grasp_of_avarice",
            imageUrl: "assets/locations/cosmodrome_grasp_of_avarice_1.avif",
            difficulty: "medium",
            submittedBy: "u/CroadNation"
        },
        {
            id: 208,
            destination: "unknown_space",
            area: "garden_of_salvation",
            imageUrl: "assets/locations/nessus_chamber_of_water_2.avif",
            difficulty: "medium",
            submittedBy: "u/CroadNation"
        },
        {
            id: 209,
            destination: "unknown_space",
            area: "garden_of_salvation",
            imageUrl: "assets/locations/nessus_sunkern_cavern_2.avif",
            difficulty: "hard",
            submittedBy: "u/CroadNation"
        },
        {
            id: 210,
            destination: "neomuna",
            area: "root_of_nightmares",
            imageUrl: "assets/locations/pale_heart_blooming_1.avif",
            difficulty: "medium",
            submittedBy: "u/CroadNation"
        },
        {
            id: 211,
            destination: "europa",
            area: "asterion_abyss",
            imageUrl: "assets/locations/europa_eventide_ruins_1.avif",
            difficulty: "medium",
            submittedBy: "u/FloydknightArt"
        },
        {
            id: 212,
            destination: "europa",
            area: "charons_crossing",
            imageUrl: "assets/locations/europa_cadmus_ridge_1.avif",
            difficulty: "easy",
            submittedBy: "u/FloydknightArt"
        },
        {
            id: 213,
            destination: "throne_world",
            area: "alluring_apostate",
            imageUrl: "assets/locations/throne_world_florescent_canal_6.avif",
            difficulty: "medium",
            submittedBy: "u/FloydknightArt"
        },
        {
            id: 214,
            destination: "dreaming_city",
            area: "rheasilvia",
            imageUrl: "assets/locations/dreaming_city_divalian_mists_8.avif",
            difficulty: "medium",
            submittedBy: "u/FloydknightArt"
        },
        {
            id: 215,
            destination: "dreaming_city",
            area: "rheasilvia",
            imageUrl: "assets/locations/dreaming_city_rheasilvia_4.avif",
            difficulty: "medium",
            submittedBy: "u/FloydknightArt"
        },
        {
            id: 216,
            destination: "dreaming_city",
            area: "the_strand",
            imageUrl: "assets/locations/dreaming_city_garden_esila_2.avif",
            difficulty: "medium",
            submittedBy: "u/FloydknightArt"
        },
        {
            id: 217,
            destination: "dreaming_city",
            area: "divalian_mists",
            imageUrl: "assets/locations/dreaming_city_spine_of_keres_2.avif",
            difficulty: "hard",
            submittedBy: "u/FloydknightArt"
        },
        {
            id: 218,
            destination: "dreaming_city",
            area: "divalian_mists",
            imageUrl: "assets/locations/dreaming_city_the_strand_6.avif",
            difficulty: "medium",
            submittedBy: "u/FloydknightArt"
        },
        {
            id: 219,
            destination: "dreaming_city",
            area: "garden_esila",
            imageUrl: "assets/locations/dreaming_city_rheasilvia_5.avif",
            difficulty: "hard",
            submittedBy: "u/FloydknightArt"
        },
        {
            id: 220,
            destination: "nessus",
            area: "the_cistern",
            imageUrl: "assets/locations/nessus_the_cistern_9.avif",
            difficulty: "medium",
            submittedBy: "u/FloydknightArt"
        },
        {
            id: 221,
            destination: "nessus",
            area: "artifact_edge",
            imageUrl: "assets/locations/nessus_artifact_edge_5.avif",
            difficulty: "medium",
            submittedBy: "u/FloydknightArt"
        },
        {
            id: 223,
            destination: "nessus",
            area: "hallows",
            imageUrl: "assets/locations/nessus_hallows_2.avif",
            difficulty: "hard",
            submittedBy: "u/FloydknightArt"
        },
        {
            id: 225,
            destination: "leviathan",
            area: "royal_pools",
            imageUrl: "assets/locations/leviathan_royal_pools_1.avif",
            difficulty: "medium",
            submittedBy: "u/Sallarran"
        },
        {
            id: 226,
            destination: "dreaming_city",
            area: "harbingers_seclude",
            imageUrl: "assets/locations/unknown_space_queens_court_1.avif",
            difficulty: "hard",
            submittedBy: "u/Sallarran"
        },
        {
            id: 227,
            destination: "unknown_space",
            area: "dares_of_eternity",
            imageUrl: "assets/locations/europa_beyond_2.avif",
            difficulty: "medium",
            submittedBy: "u/Sallarran"
        },
        {
            id: 230,
            destination: "unknown_space",
            area: "eternity",
            imageUrl: "assets/locations/unknown_space_eternity_4.avif",
            difficulty: "medium",
            submittedBy: "u/Sallarran"
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
