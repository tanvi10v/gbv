export const preloadAssets = (instance) => {
  //BG
  instance.load.image("background", "assets/startBg.png"); // Replace with your image URL

  instance.load.image("coin", "assets/coins/coin.png");
  instance.load.image("diamond", "assets/coins/diamond.png");
  instance.load.image("jewel", "assets/coins/jewel.png");
  instance.load.image("star", "assets/coins/star.png");
  instance.load.image("stone", "assets/coins/stone.png");

  // Load the bunny frames
  instance.load.image("bunny1_ready", "assets/character/bunny1_ready.png");
  instance.load.image("bunny1_stand", "assets/character/bunny1_stand.png");
  instance.load.image("bunny1_jump", "assets/character/bunny1_jump.png");

  // Obstacles
  instance.load.image("nut", "assets/obstacles/nut.png");
  instance.load.image("spikeLog", "assets/obstacles/spikeLog.png");
  instance.load.image("stick", "assets/obstacles/stick.png");
  instance.load.image("bomb", "assets/obstacles/bomb.png");
  instance.load.image("skull", "assets/obstacles/skull.png");
  instance.load.image("timeBombs", "assets/obstacles/timeBombs.png");

  instance.load.image("scoreBoard", "assets/score.png");
};
