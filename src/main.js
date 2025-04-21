import './style.css'
import Phaser from 'phaser';
import { preloadAssets } from './preloadAssets.js'; // Import the preload function
import { createGame } from './createGame.js'; // Import the create function
import { updateGame } from './updateGame.js';

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
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

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

function preload() {
  preloadAssets(this); // Preload assets using the imported function
}

function create() {
  createGame(this, gameSettings); // Create the game using the imported function

  // Enable cursor keys, including SPACE
  gameSettings.cursors = this.input.keyboard.createCursorKeys();
  gameSettings.keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

}

function update() {
  updateGame(this, gameSettings); // Update the game using the imported function
}









