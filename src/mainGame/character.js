export const character = (instance, settings) => {
    const config = settings.game.config;
    settings.bird = instance.physics.add.sprite(config.width / 2, config.height - 300, settings.birdFrames[settings.birdFrame]).setScale(0.2).setInteractive(); 
    settings.bird.setCollideWorldBounds(true); 
    instance.input.setDraggable(settings.bird);
    instance.input.on('drag', (pointer, gameObject, dragX, dragY) => {
        gameObject.x = dragX;
        gameObject.y = dragY;
    });
}