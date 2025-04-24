import { fitBackground } from "../utils";
import { textStyle } from "../constants.js";

export const create = (instance, settings) => {
    // Add the background
    instance.bg = instance.add.image(0, 0, 'startBackground').setOrigin(0, 0);
    fitBackground(instance, instance.bg); // Fit the background to the screen
    instance.bg.setScrollFactor(0);

    // Add the title text
    instance.welcomeMsg = instance.add.text(settings.game.config.width / 2 - 80, settings.game.config.height / 2 - 200, 'See IT, Stop IT', textStyle).setOrigin(0, 0).setDepth(1);

    instance.infoBoard = instance.add.sprite(settings.game.config.width / 2, settings.game.config.height / 2, 'infoBoard').setScale(0.5).setOrigin(.3, .8);

    // Add the "Start Game" button
    instance.startButton = instance.add.sprite(settings.game.config.width / 2, settings.game.config.height / 2, 'startButton').setScale(0.3).setOrigin(0, 2).setInteractive();
    instance.startButton.on('pointerdown', () => {
        instance.bg.destroy(); // Destroy the background
        instance.welcomeMsg.destroy(); // Destroy the button  
        instance.startButton.destroy(); // Destroy the button
        instance.scene.start('MainGame'); // Transition to the main game scene
    });
}