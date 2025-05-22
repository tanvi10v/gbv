import { loadGBVUseCase } from "../utils.js";

// The main update loop for the MainGame scene, called every frame.
export const update = (instance, settings) => {
  const bg1 = settings.bg1; // Reference to the scrolling background
  const bird = settings.bird; // Reference to the player character (bird)
  const reward = settings.reward; // Reference to the current reward object
  const cursors = settings.cursors; // Reference to keyboard input cursors

  // If game over, halt updates for game objects and exit the function
  if (settings.gameOver) {
    // It's good practice to check if objects exist before destroying them,
    // though in this flow, they likely do.
    if (settings.obstacle) settings.obstacle.destroy();
    if (reward) reward.destroy();
    if (bird && bird.body) bird.body.stop(); // Stop bird physics
    return;
  }

  // Background scrolling logic
  bg1.tilePositionY += settings.speed; // Move the background vertically
  // Reset background position for seamless scrolling
  if (bg1.tilePositionY >= settings.game.config.height) {
    bg1.tilePositionY = -settings.game.config.height;
  }

  // Player movement logic based on cursor keys
  if (cursors.left.isDown) {
    bird.setVelocityX(-160); // Move left
  } else if (cursors.right.isDown) {
    bird.setVelocityX(160); // Move right
  } else {
    bird.setVelocityX(0); // Stop horizontal movement
  }

  if (cursors.up.isDown) {
    bird.setVelocityY(-160); // Move up
  } else if (cursors.down.isDown) {
    bird.setVelocityY(160); // Move down
  } else {
    bird.setVelocityY(0); // Stop vertical movement
  }

  // Character animation update for the bird
  settings.birdFrame += 0.1; // Increment animation frame counter
  // Loop animation frames
  if (settings.birdFrame >= settings.birdFrames.length) {
    settings.birdFrame = 0;
  }
  // Set the bird's texture frame based on the current animation state.
  // `birdFrames` is an array of frame names (e.g., "bird_ready", "bird_jump").
  // `setFrame` is used because 'character_atlas' is a texture atlas.
  bird.setFrame(settings.birdFrames[Math.floor(settings.birdFrame)]);

  // --- GBV Use Case Loading Logic ---
  // Ensure gbvCasesConfig is available (loaded from API or fallback in gbvdata.js)
  const gbvCases = window.gbvCasesConfig;

  // Check if there are more GBV scenarios to load based on the current level
  if (gbvCases && settings.level < gbvCases.length) {
      const currentScore = parseInt(settings.scoreText.text, 10); // Get current score as an integer

      // Calculate the score threshold required to trigger the next GBV scenario.
      // `settings.level` is 0-indexed and represents the current completed level count
      // or, equivalently, the index of the *next* scenario in `gbvCases`.
      // For example:
      // - Level 0 (start): Threshold = (0 + 1) * 5 = 5 for `gbvCases[0]`
      // - Level 1 (after completing `gbvCases[0]`): Threshold = (1 + 1) * 5 = 10 for `gbvCases[1]`
      const scoreThreshold = (settings.level + 1) * 5;

      // If the current score meets or exceeds the threshold for the current level
      if (currentScore >= scoreThreshold) {
          // Load the GBV use case corresponding to the current `settings.level`.
          // `gbvCases` is an array, so `gbvCases[settings.level]` fetches the correct scenario.
          // The `loadGBVUseCase` function (in `utils.js`) is responsible for:
          //   1. Pausing the current game.
          //   2. Updating `settings.level` in the MainGame scene to reflect the level of the scenario being loaded.
          //   3. Transitioning to the `GBVUseCases` scene with the scenario data.
          loadGBVUseCase(gbvCases[settings.level], instance, settings);
      }
  }
};
