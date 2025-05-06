import { restartGame } from "./controller";

export const createObstacles = (instance, settings) => {
  const bird = settings.bird;
  // Add a group of random obstacles
  let obstacles = instance.physics.add.group();
  // Add collision detection between player and obstacles
  instance.physics.add.collider(
    bird,
    obstacles,
    () => handleCollision(instance, settings),
    null,
    instance
  );
  // Create onsctacles randomly every 5 seconds
  instance.time.addEvent({
    delay: 5000,
    callback: () => {
      if (settings.gameOver) {
        return; // If the game is over, don't create more warning signs
      }
      const obstacleType = Phaser.Math.Between(0, 5); // Randomly select an reward type
      let obstacleKey;
      switch (obstacleType) {
        case 0:
          obstacleKey = "spikeLog";
          break;
        case 1:
          obstacleKey = "stick";
          break;
        case 2:
          obstacleKey = "bomb";
          break;
        case 3:
          obstacleKey = "skull";
          break;
        case 4:
          obstacleKey = "timeBombs";
          break;
        default:
          obstacleKey = "bomb";
          break;
      }
      const x = Phaser.Math.Between(100, settings.game.config.width - 100); // Random x position
      //const y = Phaser.Math.Between(0, 0); // Random y position
      settings.obstacle = obstacles
        .create(x, 100, obstacleKey)
        .setDisplaySize(100, 100); // Create the reward
      settings.obstacle.setVelocityY(300); // Set the velocity of the reward
      settings.obstacle.setInteractive(); // Make the reward interactive
      // Animate the glow
      instance.tweens.add({
        targets: settings.obstacle,
        alpha: 0.3,
        duration: 1000,
        yoyo: true,
        repeat: 3,
      });
    },
    loop: true,
  });
};

function handleCollision(instance, settings) {
  // Handle game over logic
  settings.gameOver = true;
  instance.scene.start("GameOver"); // Transition to the Game Over scene
}
