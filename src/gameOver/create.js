
import { fitBackground } from "../utils";

import { textStyle } from "../constants.js";
export const create = (instance, settings) => {
    // Add the background
    instance.bg = instance.add.image(0, 0, 'gameOverBg').setOrigin(0, 0);
    fitBackground(instance, instance.bg); // Fit the background to the screen
    instance.bg.setScrollFactor(0);

    // Add the title text
    instance.add.text(settings.game.config.width / 2 - 80, settings.game.config.height / 2 - 200, 'Game Over', textStyle).setOrigin(0, 0).setDepth(1);

    instance.add.sprite(settings.game.config.width / 2, settings.game.config.height / 2, 'infoBoardGameOver').setScale(0.5).setOrigin(.3, .8);

    // Add the "Start Game" button
    instance.restartButton = instance.add.sprite(settings.game.config.width / 2, settings.game.config.height / 2, 'restartButton').setScale(0.4).setOrigin(0, 2).setInteractive();
    instance.restartButton.on('pointerdown', () => {
        settings.gameOver = false; // Reset the game over flag
        instance.scene.start('StartGame'); // Restart the game
    });
    // Add the "Start Game" butto0
    instance.exitButton = instance.add.sprite(settings.game.config.width / 2, settings.game.config.height / 2, 'exitButton').setScale(0.3).setOrigin(-.2, 1).setInteractive();
    instance.exitButton.on('pointerdown', () => {
        // Confirm with the user before closing
        if (confirm('Are you sure you want to exit?')) {
            try {
                window.location.href = '/'; // Redirect to the homepage
            } catch (error) {
                console.error('Failed to close the window:', error);
                alert('Unable to close the window. Please close it manually.');
            }
        }
    });
}