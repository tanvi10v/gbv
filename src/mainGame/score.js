import { textStyle } from "../constants.js";
export const score = (instance, settings) => {
    instance.add.sprite(settings.game.config.width / 2 +65, 25, 'scoreBoard').setScale(0.4).setOrigin(0, 0);
    settings.scoreText = instance.add.text(settings.game.config.width / 2 -50, 50, '0', {...textStyle, color: '#000000'}); // Create the score text
    settings.scoreText.setOrigin(0, 0); // Set the origin to the center
    settings.scoreText.setDepth(2); // Set the depth of the score text to 2
}