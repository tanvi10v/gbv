export const preloadAssets = (instance) => {
    instance.load.image('gameOverBg', 'assets/startBg.png'); // Background image
    instance.load.image('restartButton', 'assets/continue.png'); // Button image
    instance.load.image('gameOverButton', 'assets/gameOver.png'); // Button image
    instance.load.image('exitButton', 'assets/exit.png'); // Button image
}