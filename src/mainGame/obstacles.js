import { contentStyle } from "../constants";

export const createObstacles = (instance, settings) => {
  const bird = settings.bird;
  let obstacles = instance.physics.add.group();
  instance.physics.add.collider(
    bird,
    obstacles,
    () => handleCollision(instance, settings),
    null,
    instance
  );
  instance.time.addEvent({
    delay: 7000,
    callback: () => {
      if (settings.gameOver) {
        return; 
      }
      const obstacleType = Phaser.Math.Between(0, 5); 
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
      const x = Phaser.Math.Between(20, settings.game.config.width - 20); 
      settings.obstacle = obstacles
        .create(x, 100, obstacleKey)
        .setDisplaySize(100, 100).setDepth(1); 
      settings.obstacle.setVelocityY(300); 
      settings.obstacle.setInteractive(); 
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
  instance.tweens.add({
    targets: settings.bird,
    y: settings.game.config.height + 10, 
    angle: 360, 
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
            ...contentStyle,
            fontSize: "28px",
            align: "center",
            
          }
        )
        .setOrigin(0.5, 0)
        .setDepth(2);
      instance.restartButton = instance.add
        .sprite(settings.game.config.width/2, settings.game.config.height/2 - 10, "restartButton")
        .setScale(0.3)
        .setInteractive().setDepth(2);
      instance.restartButton.on("pointerdown", () => {
        settings.gameOver = false; 
        instance.scene.start("StartGame"); 
      });
      settings.gameOver = true;
    },
  });
}
