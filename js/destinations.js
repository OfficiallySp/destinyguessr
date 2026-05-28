// Destiny 2 destination and patrol-area catalog for DestinyGuessr.
// Area `id` values are stable keys (match screenshot filenames and locationData).
// Includes active destinations, legacy/vaulted zones, raids/dungeons, social spaces,
// and Renegades (Lawless Frontier, Tharsis Outpost, Equilibrium).

const destinyDestinations = [
    // —— Active patrol & expansion destinations ——
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
            { id: "widows_walk", name: "Widow's Walk" },
            { id: "shaws_wake", name: "Shaw's Wake" },
            { id: "grasp_of_avarice", name: "Grasp of Avarice" }
        ]
    },
    {
        id: "edz",
        name: "European Dead Zone",
        areas: [
            { id: "outskirts", name: "Outskirts" },
            { id: "trostland", name: "Trostland" },
            { id: "winding_cove", name: "Winding Cove" },
            { id: "the_sludge", name: "The Sludge" },
            { id: "the_gulch", name: "The Gulch" },
            { id: "firebase_hades", name: "Firebase Hades" },
            { id: "sunken_isles", name: "Sunken Isles" },
            { id: "windswept_crag", name: "Windswept Crag" },
            { id: "maevic_square", name: "Maevic Square" },
            { id: "sojourners_camp", name: "Sojourner's Camp" },
            { id: "salt_mines", name: "Salt Mines" },
            { id: "niobe_labs", name: "Niobe Labs" },
            { id: "the_tunnels", name: "The Tunnels" },
            { id: "the_farm", name: "The Farm" }
        ]
    },
    {
        id: "nessus",
        name: "Nessus",
        areas: [
            { id: "exodus_black", name: "Exodus Black" },
            { id: "artifact_edge", name: "Artifact's Edge" },
            { id: "watchers_grave", name: "Watcher's Grave" },
            { id: "glade_of_echoes", name: "Glade of Echoes" },
            { id: "the_cistern", name: "The Cistern" },
            { id: "the_tangle", name: "The Tangle" },
            { id: "hallows", name: "Hallows" },
            { id: "sunkern_cavern", name: "Sunken Cavern" },
            { id: "chamber_of_water", name: "Chamber of Water" },
            { id: "well_of_flame", name: "Well of Flame" },
            { id: "chamber_of_sky", name: "Chamber of Sky" },
            { id: "inverted_spire", name: "The Inverted Spire" },
            { id: "the_breach_nessus", name: "The Breach" },
            { id: "well_of_echoes", name: "Well of Echoes" }
        ]
    },
    {
        id: "dreaming_city",
        name: "Dreaming City",
        areas: [
            { id: "divalian_mists", name: "Divalian Mists" },
            { id: "rheasilvia", name: "Rheasilvia" },
            { id: "the_strand", name: "The Strand" },
            { id: "spine_of_keres", name: "Spine of Keres" },
            { id: "harbingers_seclude", name: "Harbinger's Seclude" },
            { id: "the_confluence", name: "The Confluence" },
            { id: "garden_esila", name: "Gardens of Esila" },
            { id: "ascendant_plane", name: "Ascendant Plane" }
        ]
    },
    {
        id: "moon",
        name: "Moon",
        areas: [
            { id: "sanctuary", name: "Sanctuary" },
            { id: "archers_line", name: "Archer's Line" },
            { id: "anchor_of_light", name: "Anchor of Light" },
            { id: "sorrows_harbor", name: "Sorrow's Harbor" },
            { id: "hellmouth", name: "Hellmouth" },
            { id: "scarlet_keep", name: "Scarlet Keep" },
            { id: "lunar_battlegrounds", name: "Lunar Battlegrounds" },
            { id: "necropolis", name: "Necropolis" },
            { id: "derelict_leviathan", name: "Derelict Leviathan" },
            { id: "temple_of_the_wrathful", name: "Temple of the Wrathful" }
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
            { id: "creation", name: "Creation" },
            { id: "adamant", name: "Adamant" },
            { id: "forging_matrix", name: "Forging Matrix" },
            { id: "firebase_imperator", name: "Firebase Imperator" },
            { id: "praxic_vault", name: "Praxic Vault" }
        ]
    },
    {
        id: "throne_world",
        name: "Savathûn's Throne World",
        areas: [
            { id: "quagmire", name: "Quagmire" },
            { id: "miasma", name: "Miasma" },
            { id: "florescent_canal", name: "Fluorescent Canal" },
            { id: "enclave", name: "The Enclave" },
            { id: "sunkern_pyramid", name: "Sunken Pyramid" },
            { id: "flotsam", name: "Flotsam" },
            { id: "alluring_apostate", name: "Alluring Apostate" }
        ]
    },
    {
        id: "neomuna",
        name: "Neomuna",
        areas: [
            { id: "zephyr_concourse", name: "Zephyr Concourse" },
            { id: "ahimsa_park", name: "Ahimsa Park" },
            { id: "liming_harbor", name: "Líming Harbor" },
            { id: "striders_gate", name: "Strider's Gate" },
            { id: "veil_containment", name: "Veil Containment" },
            { id: "irkalla_complex", name: "Irkalla Complex" },
            { id: "esi_terminal", name: "Esi Terminal" },
            { id: "mayas_retreat", name: "Maya's Retreat" },
            { id: "typhon_imperator", name: "Typhon Imperator" },
            { id: "root_of_nightmares", name: "Root of Nightmares" }
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
            { id: "divide", name: "The Divide" },
            { id: "seclusion", name: "The Seclusion" },
            { id: "refraction", name: "The Refraction" },
            { id: "substratum", name: "Substratum" },
            { id: "maelstrom", name: "Maelstrom" },
            { id: "lost_city", name: "The Lost City" }
        ]
    },
    {
        id: "kepler",
        name: "Kepler",
        areas: [
            { id: "caldera", name: "Caldera" },
            { id: "aionian_campus", name: "Aionian Campus" },
            { id: "the_stacks", name: "The Stacks" },
            { id: "the_gorge", name: "The Gorge" },
            { id: "outer_steppes", name: "Outer Steppes" },
            { id: "exiles_accord", name: "Exile's Accord" },
            { id: "altar_of_relativity", name: "Altar of Relativity" }
        ]
    },
    {
        id: "tharsis_outpost",
        name: "Tharsis Outpost",
        areas: [
            { id: "tharsis_bazaar", name: "Tharsis Bazaar" },
            { id: "tharsis_cantina", name: "Tharsis Cantina" },
            { id: "syndicate_dens", name: "Syndicate Dens" },
            { id: "holomap", name: "Holomap" }
        ]
    },
    {
        id: "plaguelands",
        name: "The Plaguelands",
        areas: [
            { id: "skyhold", name: "Skyhold" },
            { id: "felwinter_peak", name: "Felwinter Peak" },
            { id: "iron_temple", name: "Iron Temple" },
            { id: "the_wall", name: "The Wall" },
            { id: "plaguelands_patrol", name: "Plaguelands" },
            { id: "rocketyard", name: "Rocketyard" }
        ]
    },

    // —— Social spaces ——
    {
        id: "tower",
        name: "Tower",
        areas: [
            { id: "courtyard", name: "Courtyard" },
            { id: "hangar", name: "Hangar" },
            { id: "bazaar", name: "Bazaar" },
            { id: "annex", name: "Annex" },
            { id: "eliksni_quarter", name: "Eliksni Quarter" },
            { id: "helicopter_pad", name: "Helicopter Pad" }
        ]
    },
    {
        id: "helm",
        name: "H.E.L.M.",
        areas: [
            { id: "command_center", name: "Command Center" },
            { id: "war_table", name: "War Table" }
        ]
    },

    // —— Vaulted / legacy patrol destinations ——
    {
        id: "titan",
        name: "Titan",
        areas: [
            { id: "sirens_watch", name: "Siren's Watch" },
            { id: "the_rig", name: "The Rig" },
            { id: "solarium", name: "Solarium" },
            { id: "sinking_docks", name: "Sinking Docks" },
            { id: "arboretum", name: "Arboretum" },
            { id: "festering_halls", name: "Festering Halls" },
            { id: "tidal_anchor", name: "Tidal Anchor" },
            { id: "ghosts_of_the_deep", name: "Ghosts of the Deep" }
        ]
    },
    {
        id: "mars",
        name: "Mars",
        areas: [
            { id: "ares_spire", name: "Ares Spire" },
            { id: "glacial_drift", name: "Glacial Drift" },
            { id: "braytech_futurescape", name: "Braytech Futurescape" },
            { id: "olympus_decent", name: "Olympus Descent" },
            { id: "alton_dynamo", name: "Alton Dynamo" },
            { id: "braman_garrison", name: "Brayman's Garrison" },
            { id: "freehold_outskirts", name: "Freehold Outskirts" },
            { id: "hellas_fortitude", name: "Hellas Fortitude" }
        ]
    },
    {
        id: "io",
        name: "Io",
        areas: [
            { id: "lost_oasis", name: "Lost Oasis" },
            { id: "giants_scar", name: "Giant's Scar" },
            { id: "the_rupture", name: "The Rupture" },
            { id: "pyramidion", name: "The Pyramidion" }
        ]
    },
    {
        id: "mercury",
        name: "Mercury",
        areas: [
            { id: "fields_of_glass", name: "Fields of Glass" },
            { id: "infinite_forest", name: "The Infinite Forest" }
        ]
    },
    {
        id: "tangled_shore",
        name: "Tangled Shore",
        areas: [
            { id: "jetsam_saturn", name: "Jetsam of Saturn" },
            { id: "thieves_landing", name: "Thieves' Landing" },
            { id: "fourhorn_gulch", name: "Four-horn Gulch" },
            { id: "soriks_cut", name: "Sorik's Cut" },
            { id: "kereshs_crown", name: "Keresh's Crown" }
        ]
    },
    {
        id: "dreadnaught",
        name: "Dreadnaught",
        areas: [
            { id: "hull_breach", name: "Hull Breach" },
            { id: "mausoleum", name: "Mausoleum" },
            { id: "hall_of_souls", name: "Hall of Souls" },
            { id: "the_exchange", name: "The Exchange" },
            { id: "the_basilica", name: "The Basilica" },
            { id: "catacombs", name: "Catacombs" }
        ]
    },
    {
        id: "leviathan",
        name: "Leviathan",
        areas: [
            { id: "castellum", name: "Castellum" },
            { id: "royal_pools", name: "Royal Pools" },
            { id: "pleasure_gardens", name: "Pleasure Gardens" },
            { id: "the_gauntlet", name: "The Gauntlet" },
            { id: "underbelly", name: "Underbelly" }
        ]
    },

    // —— Mission / activity instances (not open-world patrol) ——
    {
        id: "venus",
        name: "Venus",
        areas: [
            { id: "ishtar_sink", name: "Ishtar Sink" },
            { id: "vault_of_glass", name: "Vault of Glass" },
            { id: "artesia_mons", name: "Artesia Mons" },
            { id: "selina_morass", name: "Selina Morass" },
            { id: "temple_grounds", name: "Temple Grounds" }
        ]
    },
    {
        id: "equilibrium",
        name: "Equilibrium",
        areas: [
            { id: "harvester_encounter", name: "Harvester Encounter" },
            { id: "imperial_dreadnought", name: "Imperial Dreadnought" },
            { id: "dredgen_sere", name: "Dredgen Sere" },
            { id: "malphas_contemptus", name: "Malphas Contemptus" }
        ]
    },
    {
        id: "unknown_space",
        name: "Unknown Space",
        areas: [
            { id: "heaven_hell", name: "Heaven / Hell" },
            { id: "queens_court", name: "Queen's Court" },
            { id: "eternity", name: "Eternity" },
            { id: "dares_of_eternity", name: "Dares of Eternity" },
            { id: "garden_of_salvation", name: "Garden of Salvation" },
            { id: "third_spire", name: "The Third Spire" },
            { id: "desert_perpetual", name: "The Desert Perpetual" }
        ]
    }
];
