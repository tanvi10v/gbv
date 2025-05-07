import { contentStyle } from "../constants";

export const score = (instance, settings) => {
  instance.add
    .sprite(settings.game.config.width / 3, 0, "scoreBoard")
    .setScale(0.2)
    .setOrigin(0, 0);
  settings.scoreText = instance.add
    .text(
      settings.game.config.width / 2 + 40,
      10,
      settings.level === 0 ? 0 : settings.scoreText.text,
      {
        ...contentStyle,
        fontSize: "23px",
        color: "#FFFFE0",
        align: "left",
      }
    )
    .setOrigin(0, 0)
    .setDepth(2); 
  settings.scoreText.setDepth(2); 
};
