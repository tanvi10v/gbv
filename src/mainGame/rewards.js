export const createrewards = (instance, settings) => {
  const bird = settings.bird; 
  const gameOver = settings.gameOver; 
  const rewards = instance.physics.add.group();
  instance.physics.add.collider(
    bird,
    rewards,
    () => handleCollision(instance, bird, "Hurray!", settings),
    null,
    instance
  );
  instance.time.addEvent({
    delay: 5000, 
    callback: () => {
      if (gameOver) {
        return; 
      }
      const rewardType = Phaser.Math.Between(0, 5); 
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
          rewardKey = "nut";
          break;
        default:
          rewardKey = "star";
          break;
      }
      const x = Phaser.Math.Between(50, settings.game.config.width - 50); 
      settings.reward = rewards
        .create(x, 100, 'collectables_atlas', rewardKey)
        .setDisplaySize(100, 100).setDepth(1); 
      settings.reward.setVelocityY(250); 
      settings.reward.setInteractive(); 
    },
    loop: true,
  });
};
function handleCollision(instance, player, message, gameSettings) {
  const scoreText = gameSettings.scoreText; 
  gameSettings.reward.destroy();
  scoreText.setText(parseInt(scoreText.text) + 1); 
}
