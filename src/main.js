
import Phaser from "phaser";
import { preloadAssets } from "./preloadAssets.js";
import { create as createMainGame } from "./mainGame/create.js";
import { create as createHowToPlayScreen } from "./howToPlay/create.js";
import { create as createStartGameScreen } from "./startGame/create.js";
import { create as createGBVScreen } from "./gbvUseCases/create.js";
import { update as updateMainGame } from "./mainGame/update.js";
class StartGame extends Phaser.Scene {
  constructor() {
    super("StartGame");
  }
  preload() {
    preloadAssets(this);
  }
  create() {
    createStartGameScreen(this, gameSettings);
  }
}
class MainGame extends Phaser.Scene {
  constructor() {
    super("MainGame");
  }
  preload() {
    preloadAssets(this);
  }
  create() {
    createMainGame(this, gameSettings);
    gameSettings.cursors = this.input.keyboard.createCursorKeys();
  }
  update() {
    updateMainGame(this, gameSettings);
  }
}

class GBVUseCases extends Phaser.Scene {
  constructor() {
    super("GBVUseCases");
  }
  init(data) {
    this.level = data.level || 0; // Default level is 1 if not provided
    this.scenarioText = data.scenarioText || "";
    this.actionText = data.actionText || "";
    this.supportiveText = data.supportiveText || "";
    this.unSupportiveText = data.unSupportiveText || "";
  }
  preload() {
    preloadAssets(this);
  }
  create() {
    createGBVScreen(this, gameSettings);
  }
}

class HowToPlay extends Phaser.Scene {
  constructor() {
    super("HowToPlay");
  }
  preload() {
    preloadAssets(this);
  }
  create() {
    createHowToPlayScreen(this, gameSettings);
  }
}
const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: window.innerWidth,
    height: window.innerHeight,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: [StartGame, MainGame, HowToPlay, GBVUseCases],
};
const game = new Phaser.Game(config);
let gameSettings = {
  game: game,
  speed: 2,
  scoreText: 0,
  birdFrame: 0,
  birdFrames: ["bird_ready", "bird_jump", "bird_stand"],
  gameOver: false,
  level: 0
};

