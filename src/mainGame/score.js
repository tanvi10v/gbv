import { textStyle } from "../constants.js";
export const score = (instance, settings) => {
  instance.add
    .sprite(settings.game.config.width / 3, 0, "scoreBoard")
    .setScale(0.2)
    .setOrigin(0, 0);

  settings.scoreText = instance.add
    .text(settings.game.config.width / 2 + 40, 10, settings.scoreText.text || 0, {
      fontFamily: "Cutive",
      fontStyle: "bold",
      fontSize: "20px",
      color: "#FFFFE0",
      align: "left",
    })
    .setOrigin(0, 0).setDepth(2); // Create the score text

  settings.scoreText.setDepth(2); // Set the depth of the score text to 2
};
