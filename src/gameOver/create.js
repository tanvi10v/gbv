export const create = (instance, settings) => {
    // Add the background
    instance.bg = instance.add.image(0, 0, 'gameOverBg').setOrigin(0, 0);

    // Add the title text
    instance.gameOverMsg = instance.add.text(700 / 2, 900 / 2 - 300, 'Game Over!', {
        fontFamily: 'Arial',
        fontSize: '48px',
        color: '#ff0000'
    }).setOrigin(0.5, 0.5);

    // Add the "Start Game" button
    instance.restartButton = instance.add.sprite(700 / 2, 900 / 2, 'restartButton').setScale(2).setInteractive();
    instance.restartButton.on('pointerdown', () => {
        settings.gameOver = false; // Reset the game over flag
        instance.scene.start('StartGame'); // Restart the game
    });

    // Add text on top of the button
    instance.add.text(700 / 2, 900 / 2 - 100, 'Restart Game', {
        fontFamily: 'Arial',
        fontSize: '24px',
        color: '#000000'
    }).setOrigin(0.5, 0.5);
}