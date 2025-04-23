import './style.css'
import Phaser from 'phaser';
import { preloadAssets as preloadAssetsForMainGame } from './mainGame/preloadAssets.js'; // Import the preload function
import { preloadAssets as preloadAssetsForGameOver } from './gameOver/preloadAssets.js'; // Import the preload function
import { preloadAssets as preloadAssetsForStartGameScreen } from './startGame/preloadAssets.js'; // Import the preload function
import { create as createMainGame } from './mainGame/create.js'; // Import the create function
import { create as createStartGameScreen } from './startGame/create.js'; // Import the create function
import { create as createGameOverScreen } from './gameOver/create.js'; // Import the create function
import { update as updateMainGame } from './mainGame/update.js';

// Start Screen Scene
class StartGame extends Phaser.Scene {
  constructor() {
    super('StartGame');
    this.bg = null; // Background image
    this.welcomeMsg = null; // Welcome message text
    this.startButton = null; // Start button
    this.startButtonText = null; // Start button text
  }

  preload() {
    preloadAssetsForStartGameScreen(this); // Preload assets using the imported function
  }

  create() {
    createStartGameScreen(this);
  }
}

// Define the Main Game Scene
class MainGame extends Phaser.Scene {
  constructor() {
    super('MainGame'); // Key for this scene
  }

  preload() {
    preloadAssetsForMainGame(this); // Preload assets using the imported function
  }

  create() {
    createMainGame(this, gameSettings); // Create the game using the imported function

    // Enable cursor keys, including SPACE
    gameSettings.cursors = this.input.keyboard.createCursorKeys();
    gameSettings.keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

  }

  update() {
    updateMainGame(this, gameSettings); // Update the game using the imported function
  }
}

// Define the Game Over Scene
class GameOver extends Phaser.Scene {
  constructor() {
    super('GameOver'); // Key for this scene
    this.bg = null; // Background image
    this.gameOverMsg = null; // Game Over message text
    this.restartButton = null; // restart button
  }

  preload() {
    preloadAssetsForGameOver(this); // Preload assets using the imported function
  }

  create() {
    createGameOverScreen(this, gameSettings); // Create the game over screen
  }
}

const config = {
  type: Phaser.AUTO,
  width: 700,
  height: 900,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  scene: [StartGame, MainGame, GameOver] // Define multiple scenes
};

const game = new Phaser.Game(config);

// Game settings object
let gameSettings = {
  game: game,
  bg1: null,
  speed: 2,
  cursors: null,
  keyEnter: null,
  gamePause: false,
  scoreText: 0,
  calloutText: null,
  calloutBox: null,
  infographic: null,
  bunny: null,
  bunnyFrame: 0,
  bunnyFrames: ['bunny1_ready', 'bunny1_jump', 'bunny1_stand'],
  obstacles: null,
  gameOver: false
}












