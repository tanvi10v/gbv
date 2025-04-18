import './style.css'
import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  width: 700,
  height: 900,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

let bg1; // Two tiled background layers
let speed = 2; // Speed of the vertical scroll 
let cursors; // Cursor keys for player movement
let keyEnter; // Key for resuming the game
let gamePause = false; // Flag to check if the game is paused

let calloutText; // Text object for the callout
let calloutBox;  // Background rectangle for the callout

let social_conflict;      // social_conflict sprite to demonstrate positioning  

let bunny;     // bunny sprite to demonstrate positioning
let bunnyFrame = 0; // The current frame of the bunny
let bunnyFrames = ['bunny1_ready', 'bunny1_jump', 'bunny1_stand']; // The frames of the bunny

let obstacles;    // Group of obstacle sprites
let gameOver = false; // Flag to track game over state


function preload() {
  //BG
  this.load.image('background', 'assets/skyBg.png'); // Replace with your image URL

  // InforGraphics
  this.load.image('social_conflict', 'assets/info-graphics/social_conflict.png');
  this.load.image('juneville_custody', 'assets/info-graphics/juneville_custody.png');
  this.load.image('violence_at_school', 'assets/info-graphics/violence_at_school.png');

  // Load the bunny frames
  this.load.image('bunny1_ready', 'assets/character/bunny1_ready.png');
  this.load.image('bunny1_stand', 'assets/character/bunny1_stand.png');
  this.load.image('bunny1_jump', 'assets/character/bunny1_jump.png');

  // Obstacles
  this.load.image('obstacle', 'assets/obstacles/particle_green.png');
}

function create() {

  // Create two TileSprites for the background
  bg1 = this.add.tileSprite(0, 0, config.width, config.height, 'background').setOrigin(0, 0);

  // Create a social_conflict sprite
  social_conflict = this.physics.add.sprite(game.config.width / 2, game.config.height / 2 - 300, 'social_conflict').setScale(.2); // Make the player semi-transparent
  // Make the social_conflict interactive
  social_conflict.setInteractive();

  // Create a background box for the callout
  calloutBox = this.add.rectangle(0, 0, 150, 50, 0x000000).setOrigin(0.5, 0.5).setAlpha(0.8).setVisible(false);

  // Create a text object for the callout
  calloutText = this.add.text(0, 0, 'Hello!', {
    fontFamily: 'Arial',
    fontSize: '16px',
    color: '#ffffff',
    align: 'center',
    wordWrap: { width: 140 } // Wrap text within the box width
  }).setOrigin(0.5, 0.5).setVisible(false);



  bunny = this.physics.add.sprite(config.width / 2, config.height - 300, bunnyFrames[bunnyFrame]).setScale(0.5); // Make the player semi-transparent
  bunny.setCollideWorldBounds(true); // Prevent the bunny from going out of bounds

  // Enable cursor keys, including SPACE
  cursors = this.input.keyboard.createCursorKeys();

  keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

  this.physics.add.collider(bunny, social_conflict, () => handleCollision(this, bunny, 'Social Conflict!'), null, this);

  // Listen for pointer down events on the bunny
  this.input.on('gameobjectdown', (pointer, gameObject) => {
    if (gameObject === social_conflict) {
      // Show the callout near the social_conflict
      showCallout(social_conflict.x, social_conflict.y - 50, 'Social Conflict!');
    }
  });

  // Add a group of random obstacles
  obstacles = this.physics.add.group();
  placeRandomObstacles(this, obstacles, 3); // Place 10 random obstacles

  // Add collision detection between player and obstacles
  this.physics.add.collider(bunny, obstacles, handleObstacles, null, this);


}

function update() {

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
  if (keyEnter.isDown && gamePause) {
    gamePause = false;
    this.scene.restart();
    this.physics.resume();
    hideCallout();
  }

  //Animate the bunny by changing the frame every 10 frames
  bunnyFrame += 0.1; // Increase the frame counter
  if (bunnyFrame >= bunnyFrames.length) {
    bunnyFrame = 0;
  }
  bunny.setTexture(bunnyFrames[Math.floor(bunnyFrame)]); // Change the bunny frame
}

function placeRandomObstacles(scene, group, count) {
  for (let i = 0; i < count; i++) {
    const x = Phaser.Math.Between(50, config.width - 50); // Random x position
    const y = Phaser.Math.Between(50, config.height - 50); // Random y position
    const obstacle = group.create(x, y, 'obstacle').setScale(1);
    obstacle.setImmovable(true); // Make obstacles immovable
  }
}

function handleObstacles(player, obstacle) {
  // Handle game over logic
  gameOver = true;

  // Stop player movement
  player.setVelocity(0, 0);

  // Display a game over message
  const centerX = config.width / 2;
  const centerY = config.height / 2;
  this.add.text(centerX, centerY, 'Game Over\nPress SPACE to Restart', {
    fontFamily: 'Arial',
    fontSize: '32px',
    color: '#ffffff',
    align: 'center'
  }).setOrigin(0.5, 0.5);


  // Listen for the SPACE key to restart the game
  this.input.keyboard.once('keydown-SPACE', () => {
    gameOver = false; // Reset the game over flag
    this.scene.restart(); // Restart the scene
  });


}

function showCallout(x, y, message) {
  // Update the callout position and text
  calloutBox.setPosition(x, y).setVisible(true);
  calloutText.setPosition(x, y).setText(message).setVisible(true);
}

function handleCollision(instance, player, message) {
  instance.physics.pause();
  gamePause = true;
  // Show the callout near the player
  showCallout(player.x, player.y - 100, message);
}

function hideCallout() {
  // Hide the callout
  calloutBox.setVisible(false);
  calloutText.setVisible(false);
}

