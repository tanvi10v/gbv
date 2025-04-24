import { hideCallout } from "./callout";
export const resumeGame = (instance, settings) => {
    settings.gamePause = false;
    settings.reward.destroy();
    instance.physics.resume();
    hideCallout(settings.calloutBox, settings.calloutText); // Hide the callout
}

export const restartGame = (instance, settings) => {
    settings.gameOver = false; // Reset the game over flag
    instance.scene.restart(); // Restart the scene
}