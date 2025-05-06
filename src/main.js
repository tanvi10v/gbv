import "./style.css";
import Phaser from "phaser";
import { preloadAssets as preloadAssetsForCantTalk } from "./cantTalk/preloadAssets.js"; // Import the preload function
import { preloadAssets as preloadAssetsForMainGame } from "./mainGame/preloadAssets.js"; // Import the preload function
import { preloadAssets as preloadAssetsForGameOver } from "./gameOver/preloadAssets.js"; // Import the preload function
import { preloadAssets as preloadAssetsForStartGameScreen } from "./startGame/preloadAssets.js"; // Import the preload function
import { preloadAssets as preloadAssetsForHowToPlayScreen } from "./howToPlay/preloadAssets.js"; // Import the preload function
import { create as createCantTalk } from "./cantTalk/create.js"; // Import the create function
import { create as createMainGame } from "./mainGame/create.js"; // Import the create function
import { create as createHowToPlayScreen } from "./howToPlay/create.js"; // Import the create function
import { create as createStartGameScreen } from "./startGame/create.js"; // Import the create function
import { create as createGameOverScreen } from "./gameOver/create.js"; // Import the create function
import { update as updateMainGame } from "./mainGame/update.js";

// Start Screen Scene
class StartGame extends Phaser.Scene {
  constructor() {
    super("StartGame");
  }

  preload() {
    preloadAssetsForStartGameScreen(this); // Preload assets using the imported function
  }

  create() {
    createStartGameScreen(this, gameSettings); // Create the start game screen using the imported function
  }
}

// Define the Main Game Scene
class MainGame extends Phaser.Scene {
  constructor() {
    super("MainGame"); // Key for this scene
  }

  preload() {
    preloadAssetsForMainGame(this); // Preload assets using the imported function
  }

  create() {
    createMainGame(this, gameSettings); // Create the game using the imported function

    // Enable cursor keys, including SPACE
    gameSettings.cursors = this.input.keyboard.createCursorKeys();
    gameSettings.keyEnter = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER
    );
  }

  update() {
    updateMainGame(this, gameSettings); // Update the game using the imported function
  }
}

class CantTalk extends Phaser.Scene {
  constructor() {
    super("CantTalk"); // Key for this scene
  }

  preload() {
    preloadAssetsForCantTalk(this); // Preload assets using the imported function
  }

  create() {
    createCantTalk(this, gameSettings); // Create the game using the imported function

    // // Enable cursor keys, including SPACE
    // gameSettings.cursors = this.input.keyboard.createCursorKeys();
    // gameSettings.keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
  }

  update() {
    //updateMainGame(this, gameSettings); // Update the game using the imported function
  }
}

// Define the Game Over Scene
class GameOver extends Phaser.Scene {
  constructor() {
    super("GameOver"); // Key for this scene
  }

  preload() {
    preloadAssetsForGameOver(this); // Preload assets using the imported function
  }

  create() {
    createGameOverScreen(this, gameSettings); // Create the game over screen
  }
}

// Define the Game Over Scene
class HowToPlay extends Phaser.Scene {
  constructor() {
    super("HowToPlay"); // Key for this scene
  }

  preload() {
    preloadAssetsForHowToPlayScreen(this); // Preload assets using the imported function
  }

  create() {
    createHowToPlayScreen(this, gameSettings); // Create the game over screen
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
  scene: [StartGame, MainGame, CantTalk, GameOver, HowToPlay], // Define multiple scenes
};

const game = new Phaser.Game(config);

// Game settings object
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
};
