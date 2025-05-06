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
    .sprite(width - 0.1 * width, height , "startButton")
    .setScale(0.3)
    .setInteractive();

  instance.startButton.on("pointerdown", () => {
    instance.scene.start("MainGame"); // Transition to the main game scene
  });
  
};
