import { showCallout } from "./callout.js"; // Import the callout functions

export const createrewards = (instance, settings) => {
  const bird = settings.bird; // Get the bird sprite
  const gameOver = settings.gameOver; // Get the game over state

  // Add a group of rewards
  const rewards = instance.physics.add.group();
  // Add collision detection between player and rewards
  instance.physics.add.collider(
    bird,
    rewards,
    () => handleCollision(instance, bird, "Hurray!", settings),
    null,
    instance
  );
  // Create rewards randomly every 5 seconds
  instance.time.addEvent({
    delay: 5000, // 5 seconds
    callback: () => {
      if (gameOver) {
        return; // If the game is over, don't create more rewards
      }
      const rewardType = Phaser.Math.Between(0, 2); // Randomly select an reward type
      let rewardKey;
      switch (rewardType) {
        case 0:
          rewardKey = "star";
          break;
        case 1:
          rewardKey = "jewel";
          break;
        case 3:
          rewardKey = "coin";
          break;
        case 4:
          rewardKey = "diamond";
          break;
        case 5:
          rewardKey = "stone";
          break;
        default:
          rewardKey = "star";
          break;
      }
      const x = Phaser.Math.Between(100, settings.game.config.width - 50); // Random x position
      settings.reward = rewards.create(x, 100, rewardKey).setDisplaySize(100,100); // Create the reward
      settings.reward.setVelocityY(100); // Set the velocity of the reward
      settings.reward.setInteractive(); // Make the reward interactive
    },
    loop: true,
  });
};

function handleCollision(instance, player, message, gameSettings) {
  const calloutBox = gameSettings.calloutBox; // Get the callout box
  const calloutText = gameSettings.calloutText; // Get the callout text
  const scoreText = gameSettings.scoreText; // Get the score text
  instance.physics.pause();
  gameSettings.gamePause = true;
  // Show the callout near the player
  showCallout(player.x, player.y - 100, message, calloutBox, calloutText);
  scoreText.setText(parseInt(scoreText.text) + 1); // Increment the score
}
