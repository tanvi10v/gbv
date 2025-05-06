import { fitBackground } from "../utils";

import { textStyle } from "../constants.js";
export const create = (instance, settings) => {
  // Add the background
  instance.bg = instance.add.image(0, 0, "gameOverBg").setOrigin(0, 0);
  fitBackground(instance, instance.bg); // Fit the background to the screen
  instance.bg.setScrollFactor(0);

  const width = settings.game.config.width / 2;
  const height = settings.game.config.height / 2;

  instance.add
    .sprite(width - 50, height - 200, "gameOverButton")
    .setScale(0.3)
    .setDepth(1)
    .setOrigin(0, 0);

  // Add the "Start Game" button
  instance.restartButton = instance.add
    .sprite(width , height - 10 , "restartButton")
    .setScale(0.3)
    .setInteractive();

  instance.restartButton.on("pointerdown", () => {
    settings.gameOver = false; // Reset the game over flag
    instance.scene.start("StartGame"); // Restart the game
  });
  // Add the "Start Game" butto0
  instance.exitButton = instance.add
    .sprite(width, height + 50, "exitButton")
    .setScale(0.2)
    .setInteractive();
  instance.exitButton.on("pointerdown", () => {
    // Confirm with the user before closing
    if (confirm("Are you sure you want to exit?")) {
      try {
        window.location.href = "/"; // Redirect to the homepage
      } catch (error) {
        console.error("Failed to close the window:", error);
        alert("Unable to close the window. Please close it manually.");
      }
    }
  });
};
