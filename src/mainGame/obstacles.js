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
    delay: 7000,
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
      const x = Phaser.Math.Between(20, settings.game.config.width - 20); // Random x position
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
  settings.bird.stop();
  settings.bird.setTint(0xff0000);

  // Create a free-fall animation
  instance.tweens.add({
    targets: settings.bird,
    y: settings.game.config.height + 10, // Fall off-screen
    angle: 360, // Spin while falling
    duration: 2000,
    ease: "Linear",
    onComplete: () => {
      const gameOverText = `Game Over!!!`;
      instance.add
        .text(
          settings.game.config.width / 2,
          settings.game.config.height / 2 - 200,
          gameOverText,
          {
            fontFamily: "Cutive",
            fontWeight: "100",
            fontStyle: "normal",
            fontSize: "28px",
            color: "#333333",
            align: "left",
            wordWrap: { width: 300 },
          }
        )
        .setOrigin(0.5, 0)
        .setDepth(2);

      // Add the "Start Game" button
      instance.restartButton = instance.add
        .sprite(settings.game.config.width/2, settings.game.config.height/2 - 10, "restartButton")
        .setScale(0.3)
        .setInteractive().setDepth(2);

      instance.restartButton.on("pointerdown", () => {
        settings.gameOver = false; // Reset the game over flag
        instance.scene.start("StartGame"); // Restart the game
      });

      settings.gameOver = true;
    },
  });
  // Handle game over logic

  //instance.scene.start("GameOver"); // Transition to the Game Over scene
}
