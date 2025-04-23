export const create = (instance) => {
    // Add the background
    instance.bg = instance.add.image(0, 0, 'startBackground').setOrigin(0, 0);

    // Add the title text
    instance.welcomeMsg = instance.add.text(700 / 2, 900 / 2 - 300, 'Welcome to My Game!', {
        fontFamily: 'Arial',
        fontSize: '18px',
        color: '#ffffff'
    }).setOrigin(0.5, 0.5);

    // Add the "Start Game" button
    instance.startButton = instance.add.sprite(700 / 2, 900 / 2, 'startButton').setScale(0.2).setInteractive();
    instance.startButton.on('pointerdown', () => {
        instance.bg.destroy(); // Destroy the background
        instance.welcomeMsg.destroy(); // Destroy the button  
        instance.startButton.destroy(); // Destroy the button
        instance.scene.start('MainGame'); // Transition to the main game scene
    });

    // Add text on top of the button
    instance.add.text(700 / 2, 900 / 2 - 200, 'Start Game', {
        fontFamily: 'Arial',
        fontSize: '18px',
        color: '#000000'
    }).setOrigin(0.5, 0.5);
}