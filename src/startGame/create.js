import { fitBackground } from "../utils";
import { textStyle } from "../constants.js";

export const create = (instance, settings) => {
  // Add the background
  instance.bg = instance.add.image(0, 0, "startBackground").setOrigin(0, 0);
  fitBackground(instance, instance.bg); // Fit the background to the screen
  instance.bg.setScrollFactor(0);

  const width = settings.game.config.width / 2;
  const height = settings.game.config.height / 2;

  // Add the "Start Game" button
  instance.startButton = instance.add
    .sprite(width, height - 100, "startButton")
    .setScale(0.3)
    .setInteractive();

  // Add the "Start Game" button
  instance.howToPlayButton = instance.add
    .sprite(width + 150 , height-250, "howToPlayButton")
    .setScale(0.2)
    .setInteractive();

  instance.startButton.on("pointerdown", () => {
    instance.scene.start("MainGame"); // Transition to the main game scene
  });

  instance.howToPlayButton.on("pointerdown", () => {
    instance.scene.start("HowToPlay"); // Transition to the main game scene
  });
};
