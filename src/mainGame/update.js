import { loadGBVUseCase } from "../loadGBVUseCase.js";
export const update = (instance, settings) => {
  const bg1 = settings.bg1;
  const bird = settings.bird;
  const reward = settings.reward;
  const cursors = settings.cursors;
  if (settings.gameOver) {
    settings.obstacle.destroy();
    reward.destroy();
    settings.bird.body.stop();
    return;
  }
  bg1.tilePositionY += settings.speed;
  if (bg1.tilePositionY >= settings.game.config.height)
    bg1.tilePositionY = -settings.game.config.height;
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
  settings.birdFrame += 0.1;
  if (settings.birdFrame >= settings.birdFrames.length) {
    settings.birdFrame = 0;
  }
  bird.setTexture(settings.birdFrames[Math.floor(settings.birdFrame)]);
  if (settings.scoreText.text === "1" && settings.level < 1) {
    loadGBVUseCase(
      1,
      `
  When your friend says, 
  "I feel like I can't talk to 
  anyone anymore."
`,
      ` 
  What will you say? (Pick One)`,
      `That's tough. Do you want to talk about it?`,
      `You're overreacting. It can't be that bad.`,
      instance,
      settings
    );
  }
  if (settings.scoreText.text === "2" && settings.level === 1) {
    loadGBVUseCase(
      2,
      `
  My ex shared intimate photos of me online without my consent. 
  Now strangers are messaging me about them, and I feel humiliated. 
`,
      ` 
  What should I do? (Pick One)`,
      `Request the removal of the photos from the platform.`,
      `Try to ignore the situation, hoping it will blow over.`,
      instance,
      settings
    );
  }
  if (settings.scoreText.text === "3" && settings.level === 2) {
    loadGBVUseCase(3, "Alice", "Alice", "Alice", "Alice", instance, settings);
  }
};
