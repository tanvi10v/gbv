import { hideCallout } from "./callout";
export const resumeGame = (instance, settings) => {
    settings.gamePause = false;
    settings.reward.destroy();
    instance.physics.resume();
    hideCallout(settings.calloutBox, settings.calloutText); 
}
export const restartGame = (instance, settings) => {
    settings.gameOver = false; 
    instance.scene.restart(); 
}