import { restartGame } from "./controller";

export const createObstacles = (instance, settings) => {
    const bunny = settings.bunny;
    // Add a group of random obstacles
    let obstacles = instance.physics.add.group();
    // Add collision detection between player and obstacles
    instance.physics.add.collider(bunny, obstacles, () => handleCollision(instance, settings), null, instance);
    // Create onsctacles randomly every 5 seconds
    instance.time.addEvent({
        delay: 5000,
        callback: () => {
            if (settings.gameOver) {
                return; // If the game is over, don't create more warning signs
            }
            const obstacleType = Phaser.Math.Between(0, 5); // Randomly select an infographic type
            let obstacleKey;
            switch (obstacleType) {
                case 0:
                    obstacleKey = 'flame';
                    break;
                case 1:
                    obstacleKey = 'lighting_blue';
                    break;
                case 2:
                    obstacleKey = 'lighting_yellow';
                    break;
                case 3:
                    obstacleKey = 'bomb';
                    break;
                case 4:
                    obstacleKey = 'skull';
                    break;
                case 5:
                    obstacleKey = 'timeBombs';
                    break;
                default:
                    obstacleKey = 'bomb';
                    break;
            }
            const x = Phaser.Math.Between(100, settings.game.config.width - 100); // Random x position
            //const y = Phaser.Math.Between(0, 0); // Random y position
            settings.obstacle = obstacles.create(x, 100, obstacleKey).setDisplaySize(100,100); // Create the infographic
            settings.obstacle.setVelocityY(200); // Set the velocity of the infographic
            settings.obstacle.setInteractive(); // Make the infographic interactive


        },
        loop: true
    });
}

function handleCollision(instance, settings) {
    // Handle game over logic
    settings.gameOver = true;
    instance.scene.start('GameOver'); // Transition to the Game Over scene
}