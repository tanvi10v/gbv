export const preloadAssets = (instance) => {
    //BG
    instance.load.image('background', 'assets/path.png'); // Replace with your image URL

    // InforGraphics
    instance.load.image('social_conflict', 'assets/info-graphics/social_conflict.png');
    instance.load.image('juneville_custody', 'assets/info-graphics/juneville_custody.png');
    instance.load.image('violence_at_school', 'assets/info-graphics/violence_at_school.png');

    // Load the bunny frames
    instance.load.image('bunny1_ready', 'assets/character/bunny1_ready.png');
    instance.load.image('bunny1_stand', 'assets/character/bunny1_stand.png');
    instance.load.image('bunny1_jump', 'assets/character/bunny1_jump.png');

    // Obstacles
    instance.load.image('flame', 'assets/obstacles/flame.png');
    instance.load.image('lighting_blue', 'assets/obstacles/lighting_blue.png');
    instance.load.image('lighting_yellow', 'assets/obstacles/lighting_yellow.png');
    instance.load.image('bomb', 'assets/obstacles/bomb.png');
    instance.load.image('skull', 'assets/obstacles/skull.png');
    instance.load.image('timeBombs', 'assets/obstacles/timeBombs.png');
}