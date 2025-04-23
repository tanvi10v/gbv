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
            placeRandomObstacles(instance, obstacles, 1, settings); // Place 10 random obstacles
        },
        loop: true
    });
}

function placeRandomObstacles(scene, group, count, settings) {
    for (let i = 0; i < count; i++) {
        const x = Phaser.Math.Between(0, settings.game.config.width - 50); // Random x position
        const y = Phaser.Math.Between(0, settings.game.config.height - 50); // Random y position
        settings.obstacle = group.create(x, y, 'obstacle').setScale(1);
        settings.obstacle.setVelocityY(200);
        settings.obstacle.setInteractive();
    }
}

function handleCollision(instance, settings) {
    // Handle game over logic
    settings.gameOver = true;
    instance.scene.start('GameOver'); // Transition to the Game Over scene
}