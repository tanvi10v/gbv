export const score = (instance, settings) => {
    settings.scoreText = instance.add.text(settings.game.config.width / 2, 50, '0', {
        fontSize: '32px',
        fill: '#fff'
    });
    settings.scoreText.setOrigin(0.5, 0.5); // Set the origin to the center
    settings.scoreText.setDepth(2); // Set the depth of the score text to 2
}