
export const resumeGame = (instance, settings) => {
    settings.gamePause = false;
    settings.reward.destroy();
    instance.physics.resume();
}
export const restartGame = (instance, settings) => {
    settings.gameOver = false; 
    instance.scene.restart(); 
}