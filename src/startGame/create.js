import { contentStyle } from "../constants";
import { fitBackground } from "../utils";
export const create = (instance, settings) => {
  instance.bg = instance.add.image(0, 0, "background").setOrigin(0, 0);
  fitBackground(instance, instance.bg); 
  instance.bg.setScrollFactor(0);
  const width = settings.game.config.width / 2;
  const height = settings.game.config.height / 2;
  const gameTitle = "SAFE-SPACE QUEST";
  instance.add
    .text(width, height - 100, gameTitle, contentStyle)
    .setOrigin(0.5, 0);
  instance.startButton = instance.add
    .sprite(width, height + 50, "startButton")
    .setScale(0.3)
    .setInteractive();
  instance.howToPlayButton = instance.add
    .sprite(width + 150, height - 250, "howToPlayButton")
    .setScale(0.2)
    .setInteractive();
  instance.startButton.on("pointerdown", () => {
    instance.scene.start("MainGame"); 
  });
  instance.howToPlayButton.on("pointerdown", () => {
    instance.scene.start("HowToPlay"); 
  });
};
