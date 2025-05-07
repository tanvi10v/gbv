import { loadGBVUseCase } from "../utils.js";
import { gbvCasesConfig } from "../constants.js";
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
  if (settings.scoreText.text === "5" && settings.level === 0) {
    loadGBVUseCase(gbvCasesConfig[0], instance, settings);
  }
  if (settings.scoreText.text === "10" && settings.level === 1) {
    loadGBVUseCase(gbvCasesConfig[1], instance, settings);
  }
  if (settings.scoreText.text === "15" && settings.level === 2) {
    loadGBVUseCase(gbvCasesConfig[2], instance, settings);
  }
  if (settings.scoreText.text === "20" && settings.level === 3) {
    loadGBVUseCase(gbvCasesConfig[3], instance, settings);
  }
  if (settings.scoreText.text === "25" && settings.level === 4) {
    loadGBVUseCase(gbvCasesConfig[4], instance, settings);
  }
};
