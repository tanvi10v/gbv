export const character = (instance, settings) => {
    const config = settings.game.config;
    settings.bunny = instance.physics.add.sprite(config.width / 2, config.height - 300, settings.bunnyFrames[settings.bunnyFrame]).setScale(0.5).setInteractive(); // Make the player semi-transparent
    settings.bunny.setCollideWorldBounds(true); // Prevent the bunny from going out of bounds
    instance.input.setDraggable(settings.bunny);
    instance.input.on('drag', (pointer, gameObject, dragX, dragY) => {
        gameObject.x = dragX;
        gameObject.y = dragY;
    });
}