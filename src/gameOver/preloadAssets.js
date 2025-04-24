export const preloadAssets = (instance) => {
    instance.load.image('gameOverBg', 'assets/startBg.png'); // Background image
    instance.load.image('infoBoardGameOver', 'assets/infoBoard.png'); // Button image
    instance.load.image('restartButton', 'assets/continue.png'); // Button image
    instance.load.image('exitButton', 'assets/exit.png'); // Button image
}