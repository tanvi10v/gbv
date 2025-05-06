import { textStyle } from "../constants.js";
export const score = (instance, settings) => {
  instance.add
    .sprite(settings.game.config.width / 2, 0, "scoreBoard")
    .setScale(0.4)
    .setOrigin(0, 0);
  settings.scoreText = instance.add
    .text(settings.game.config.width / 5, 25, "0", {
      ...textStyle,
      color: "#000000",
    })
    .setOrigin(0, 0); // Create the score text

  settings.scoreText.setDepth(2); // Set the depth of the score text to 2
};
