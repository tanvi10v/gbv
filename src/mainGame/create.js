import { fitBackground } from '../utils.js';
import { createCallout } from './callout.js';
import { character } from './character.js';
import { createrewards } from './rewards.js'; 
import { createObstacles } from './obstacles.js'; 
import { score } from './score.js';
export const create = (instance, settings) => {
    const config = settings.game.config;
    settings.bg1 = instance.add.tileSprite(0, 0, config.width, config.height, 'background').setOrigin(0, 0);
    fitBackground(instance, settings.bg1); 
    createCallout(instance, settings); 
    character(instance, settings); 
    createrewards(instance, settings); 
    createObstacles(instance, settings); 
    score(instance, settings); 
}
