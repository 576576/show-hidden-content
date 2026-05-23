// Initialize
print("Show all hidden contents");

// Items
try {
    Vars.content.items().each(item => {
        item.hidden = false;
    });
} catch (_) {}

// Blocks
try {
    Vars.content.blocks().each(block => {
        block.buildVisibility = BuildVisibility.shown;
    });
} catch (_) {}

// Fluids
try {
    Vars.content.liquids().each(fluid => {
        fluid.hidden = false;
    });
} catch (_) {}

// StatusEffects
try {
    Vars.content.statusEffects().each(se => {
        se.show = true;
    });
} catch (_) {}

// Units
try {
    Vars.content.units().each(unit => {
        unit.hidden = false;
    });
} catch (_) {}

// Planets
try {
    Vars.content.planets().each(planet => {
        planet.visible = true;
        planet.allowLaunchToNumbered = true;
        planet.accessible = true;
        planet.allowLegacyLaunchPads = true;
        planet.alwaysUnlocked = true;
    });
} catch (e) {}