
import { showCallout } from './callout.js'; // Import the callout functions

export const createInfoGraphics = (instance, settings) => {

    const bunny = settings.bunny; // Get the bunny sprite
    const gameOver = settings.gameOver; // Get the game over state

    // Add a group of infographics
    const infographics = instance.physics.add.group();
    // Add collision detection between player and infographics
    instance.physics.add.collider(bunny, infographics, () => handleCollision(instance, bunny, 'Infographic!', settings), null, instance);
    // Create infographics randomly every 5 seconds
    instance.time.addEvent({
        delay: 5000,  // 5 seconds
        callback: () => {
            if (gameOver) {
                return; // If the game is over, don't create more infographics
            }
            const infographicType = Phaser.Math.Between(0, 2); // Randomly select an infographic type
            let infographicKey;
            switch (infographicType) {
                case 0:
                    infographicKey = 'juneville_custody';
                    break;
                case 1:
                    infographicKey = 'violence_at_school';
                    break;
                case 2:
                    infographicKey = 'social_conflict';
                    break;
                default:
                    infographicKey = 'social_conflict';
                    break;
            }
            const x = Phaser.Math.Between(0, settings.game.config.width - 50); // Random x position
            const y = Phaser.Math.Between(0, settings.game.config.height - 50); // Random y position
            settings.infographic = infographics.create(x, y, infographicKey).setScale(0.2); // Create the infographic
            settings.infographic.setVelocityY(100); // Set the velocity of the infographic
            settings.infographic.setInteractive(); // Make the infographic interactive

        },
        loop: true
    });
}

function handleCollision(instance, player, message, gameSettings) {
    const calloutBox = gameSettings.calloutBox; // Get the callout box
    const calloutText = gameSettings.calloutText; // Get the callout text
    const scoreText = gameSettings.scoreText; // Get the score text
    instance.physics.pause();
    gameSettings.gamePause = true;
    // Show the callout near the player
    showCallout(player.x, player.y - 100, message, calloutBox, calloutText);
    scoreText.setText(parseInt(scoreText.text) + 1); // Increment the score
}