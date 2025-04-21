import { hideCallout } from './callout.js';
import { resumeGame, restartGame} from './controller.js';
export const updateGame = (instance, settings) => {

    const bg1 = settings.bg1; // Get the background layer
    const calloutBox = settings.calloutBox; // Get the callout box
    const calloutText = settings.calloutText; // Get the callout text
    const bunny = settings.bunny; // Get the bunny sprite
    let gamePause = settings.gamePause; // Get the game pause state
    const infographic = settings.infographic; // Get the infographic
    const keyEnter = settings.keyEnter; // Get the enter key
    const cursors = settings.cursors; // Get the cursor keys

    if (settings.gameOver) {
        // If the game hasn't started or is over, don't update the game
        return; // Don't update if the game hasn't started
    }


    // Scroll both backgrounds vertically
    bg1.tilePositionY += settings.speed;

    // Reset positions when they move out of view
    if (bg1.tilePositionY >= settings.game.config.height) bg1.tilePositionY = -settings.game.config.height;

    // Move the bunny with arrow keys
    if (cursors.left.isDown) {
        bunny.setVelocityX(-160);
    } else if (cursors.right.isDown) {
        bunny.setVelocityX(160);
    } else {
        bunny.setVelocityX(0);
    }

    if (cursors.up.isDown) {
        bunny.setVelocityY(-160);
    } else if (cursors.down.isDown) {
        bunny.setVelocityY(160);
    } else {
        bunny.setVelocityY(0);
    }

    // Resume the game when SPACE is pressed
    if (keyEnter.isDown && settings.gamePause) {
        gamePause = false;
        infographic.destroy();
        instance.physics.resume();
        hideCallout(calloutBox, calloutText); // Hide the callout
    }

    // Global mouse click detection
    instance.input.on('pointerdown', (pointer) => {
        if (settings.gamePause) {
            resumeGame(instance, settings); // Pause the game
        }
        if (settings.gameOver) {
            restartGame(instance, settings); // Restart the game
        }
    });

    //Animate the bunny by changing the frame every 10 frames
    settings.bunnyFrame += 0.1; // Increase the frame counter
    if (settings.bunnyFrame >= settings.bunnyFrames.length) {
        settings.bunnyFrame = 0;
    }
    bunny.setTexture(settings.bunnyFrames[Math.floor(settings.bunnyFrame)]); // Change the bunny frame
}