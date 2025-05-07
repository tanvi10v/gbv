import "./style.css";
import Phaser from "phaser";
import { preloadAssets } from "./preloadAssets.js";
import { create as createCantTalk } from "./cantTalk/create.js";
import { create as createMainGame } from "./mainGame/create.js";
import { create as createHowToPlayScreen } from "./howToPlay/create.js";
import { create as createRevengePornScreen } from "./revengePorn/create.js";
import { create as createStartGameScreen } from "./startGame/create.js";
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
class CantTalk extends Phaser.Scene {
  constructor() {
    super("CantTalk"); 
  }
  preload() {
    preloadAssets(this); 
  }
  create() {
    createCantTalk(this, gameSettings); 
  }
  update() {}
}
class RevengePorn extends Phaser.Scene {
  constructor() {
    super("RevengePorn"); 
  }
  preload() {
    preloadAssets(this); 
  }
  create() {
    createRevengePornScreen(this, gameSettings); 
  }
  update() {}
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
  scene: [StartGame, MainGame, HowToPlay, CantTalk, RevengePorn], 
};
const game = new Phaser.Game(config);
let gameSettings = {
  game: game,
  supportiveButton: null,
  UnSupportiveButton: null,
  qBoard: null,
  bg1: null,
  speed: 2,
  cursors: null,
  keyEnter: null,
  gamePause: false,
  scoreText: 0,
  calloutText: null,
  calloutBox: null,
  reward: null,
  bird: null,
  birdFrame: 0,
  birdFrames: ["bird_ready", "bird_jump", "bird_stand"],
  obstacles: null,
  gameOver: false,
  level: 0,
};
