import Phaser from "phaser";
import { preloadAssets } from "./preloadAssets.js";
import { create as createMainGame } from "./mainGame/create.js";
import { create as createHowToPlayScreen } from "./howToPlay/create.js";
import { create as createStartGameScreen } from "./startGame/create.js";
import { create as createGBVScreen } from "./gbvUseCases/create.js";
import { update as updateMainGame } from "./mainGame/update.js";

export async function loadPhaserGame() {
  // Scene for the initial start screen of the game
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
  // Scene for the main gameplay
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

  // Scene for displaying and interacting with GBV (Gender-Based Violence) use case scenarios
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

  // Scene for displaying instructions on how to play the game
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
  // Phaser game configuration object
  const config = {
    type: Phaser.AUTO, // Automatically detect the renderer (WebGL or Canvas)
    width: window.innerWidth, // Set game width to browser window width
    height: window.innerHeight, // Set game height to browser window height
    scale: {
      mode: Phaser.Scale.FIT, // Scale the game to fit within the browser window
      autoCenter: Phaser.Scale.CENTER_BOTH, // Center the game canvas horizontally and vertically
      width: window.innerWidth,
      height: window.innerHeight,
    },
    physics: {
      default: "arcade", // Use Arcade Physics engine
      arcade: {
        gravity: { y: 0 }, // No global gravity
        debug: false, // Disable physics debugging visuals
      },
    },
    // List of scenes to be included in the game
    scene: [StartGame, MainGame, HowToPlay, GBVUseCases],
  };
  const game = new Phaser.Game(config); // Initialize the Phaser game instance

  // Global game settings object, shared across scenes
  let gameSettings = {
    game: game, // Reference to the Phaser game instance
    speed: 2, // Initial game speed (e.g., for background scrolling)
    scoreText: 0, // Stores the player's current score, typically a Phaser Text object or its value
    birdFrame: 0, // Current animation frame index for the bird character
    birdFrames: ["bird_ready", "bird_jump", "bird_stand"], // Array of frame names for bird animation
    gameOver: false, // Flag to indicate if the game is over
    level: 0, // Current game level, used for GBV scenario progression (0-indexed)
  };
}
