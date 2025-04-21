import { createCallout } from './callout.js';
import { character } from './character.js';
import { createInfoGraphics } from './infoGraphics.js'; // Import the info graphics function
import { createObstacles } from './obstacles.js'; // Import the obstacles function
import { score } from './score.js';
export const createGame = (instance, settings) => {
    const config = settings.game.config;
   

    // Set background
    settings.bg1 = instance.add.tileSprite(0, 0, config.width, config.height, 'background').setOrigin(0, 0);
    createCallout(instance, settings); // Create the callout
    character(instance, settings); // Create the character
    createInfoGraphics(instance, settings); // Create the infographics
    createObstacles(instance, settings); // Create the infographics
    score(instance, settings); // Create the score text
}

