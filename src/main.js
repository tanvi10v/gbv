import './style.css'
import Phaser from 'phaser';
import { preloadAssets } from './preloadAssets.js'; // Import the preload function
import { createGame } from './createGame.js'; // Import the create function
import { hideCallout } from './callout.js'; // Import the callout functions

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
let speed = 2; // Speed of the vertical scroll 
let cursors; // Cursor keys for player movement
let keyEnter; // Key for resuming the game
let gamePause = false; // Flag to check if the game is paused
let scoreText; // Text object to display the score
let infographic; // infographic sprite
let bunnyFrame = 0; // The current frame of the bunny
let bunnyFrames = ['bunny1_ready', 'bunny1_jump', 'bunny1_stand']; // The frames of the bunny
let obstacles;    // Group of obstacle sprites
let gameOver = false; // Flag to track game over state

function preload() {
  preloadAssets(this); // Preload assets using the imported function
}

function create() {
  createGame(this, gameSettings); // Create the game using the imported function
  
  // Enable cursor keys, including SPACE
  cursors = this.input.keyboard.createCursorKeys();
  keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

  }

function update() {

  const bg1 = gameSettings.bg1; // Get the background layer
  const calloutBox = gameSettings.calloutBox; // Get the callout box
  const calloutText = gameSettings.calloutText; // Get the callout text
  const bunny = gameSettings.bunny; // Get the bunny sprite
  let gamePause = gameSettings.gamePause; // Get the game pause state
  const infographic = gameSettings.infographic; // Get the infographic


  if (gameOver) {
    // If the game hasn't started or is over, don't update the game
    return; // Don't update if the game hasn't started
  }


  // Scroll both backgrounds vertically
  bg1.tilePositionY += speed;

  // Reset positions when they move out of view
  if (bg1.tilePositionY >= config.height) bg1.tilePositionY = -config.height;

  // Move the bunny with arrow keys
  if (cursors.left.isDown) {
    bunny.setVelocityX(-160);
  } else if (cursors.right.isDown) {
    bunny.setVelocityX(160);
  } else {
    bunny.setVelocityX(0);
  }

  if (cursors.up.isDown) {
    bunny.setVelocityY(-160);
  } else if (cursors.down.isDown) {
    bunny.setVelocityY(160);
  } else {
    bunny.setVelocityY(0);
  }

  // Resume the game when SPACE is pressed
  if (keyEnter.isDown && gameSettings.gamePause) {
    gamePause = false;
    infographic.destroy();
    this.physics.resume();
    hideCallout(calloutBox, calloutText); // Hide the callout
  }

  //Animate the bunny by changing the frame every 10 frames
  bunnyFrame += 0.1; // Increase the frame counter
  if (bunnyFrame >= bunnyFrames.length) {
    bunnyFrame = 0;
  }
  bunny.setTexture(bunnyFrames[Math.floor(bunnyFrame)]); // Change the bunny frame
}









