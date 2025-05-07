import { hideCallout } from "./callout.js";
import { resumeGame, restartGame } from "./controller.js";
import { showAlertBox } from "../showAlertBox.js";
export const update = (instance, settings) => {
  const bg1 = settings.bg1; // Get the background layer
  const calloutBox = settings.calloutBox; // Get the callout box
  const calloutText = settings.calloutText; // Get the callout text
  const bird = settings.bird; // Get the bird sprite
  let gamePause = settings.gamePause; // Get the game pause state
  const reward = settings.reward; // Get the reward
  const keyEnter = settings.keyEnter; // Get the enter key
  const cursors = settings.cursors; // Get the cursor keys

  if (settings.gameOver) {
    settings.obstacle.destroy();
    reward.destroy();
    settings.bird.body.stop();
    // If the game hasn't started or is over, don't update the game
    return; // Don't update if the game hasn't started
  }

  // Scroll both backgrounds vertically
  bg1.tilePositionY += settings.speed;

  // Reset positions when they move out of view
  if (bg1.tilePositionY >= settings.game.config.height)
    bg1.tilePositionY = -settings.game.config.height;

  // Move the bird with arrow keys
  if (cursors.left.isDown) {
    bird.setVelocityX(-160);
  } else if (cursors.right.isDown) {
    bird.setVelocityX(160);
  } else {
    bird.setVelocityX(0);
  }

  if (cursors.up.isDown) {
    bird.setVelocityY(-160);
  } else if (cursors.down.isDown) {
    bird.setVelocityY(160);
  } else {
    bird.setVelocityY(0);
  }

  //Animate the bird by changing the frame every 10 frames
  settings.birdFrame += 0.1; // Increase the frame counter
  if (settings.birdFrame >= settings.birdFrames.length) {
    settings.birdFrame = 0;
  }
  bird.setTexture(settings.birdFrames[Math.floor(settings.birdFrame)]); // Change the bird frame

  if (settings.scoreText.text === "5" && settings.level < 1) {
    settings.level = 1;
    showAlertBox(
      instance,
      "Congratulations! You have reached to Level One. Time to take decision! Select Yes to Enter!",
      () => instance.scene.start("CantTalk"),
      "Enter",
      null
    );
  }

  if (settings.scoreText.text === "10" && settings.level === 1) {
    settings.level = 2;
    showAlertBox(
      instance,
      "Congratulations! You have reached to Level Two. Time to take decision! Select Yes to Enter!",
      () => instance.scene.start("RevengePorn"),
      "Enter",
      null
    );
  }
};
