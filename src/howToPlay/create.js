import { fitBackground } from "../utils.js";
import { textStyle } from "../constants.js";

export const create = (instance, settings) => {
  // Add the background
  instance.bg = instance.add.image(0, 0, "howToPlayBg").setOrigin(0, 0);
  fitBackground(instance, instance.bg); // Fit the background to the screen
  instance.bg.setScrollFactor(0);

  const width = settings.game.config.width / 2;
  const height = settings.game.config.height / 2;

  // Add instructions text
  const instructionsText = `
  Welcome to the Game!
  
  Controls:
  - Use Arrow Keys to Move the bird
  
  Objective:
  - Collect items and reach the goal.
  
  Avoid obstacles and enemies to survive!
`;

  instance.add
    .text(width, height - 200, instructionsText, {
      fontFamily: "Cutive",
      fontWeight: "100",
      fontStyle: "normal",
      fontSize: "18px",
      color: "white",
      align: "center",
      wordWrap: { width: 600 },
    })
    .setOrigin(0.5, 0);

  // Add the "Start Game" button
  instance.continueButton = instance.add
    .sprite(width, height + 100, "continueButton")
    .setScale(0.3)
    .setInteractive();

  instance.continueButton.on("pointerdown", () => {
    instance.scene.start("StartGame"); // Transition to the main game scene
  });
};
