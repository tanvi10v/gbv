export const preloadAssets = (instance) => {
    //BG
    instance.load.image('background', 'assets/path.png'); // Replace with your image URL


    instance.load.image('gold', 'assets/coins/gold_1.png');
    instance.load.image('bronze', 'assets/coins/bronze_1.png');

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
    
    instance.load.image('scoreBoard', 'assets/score.png');
}