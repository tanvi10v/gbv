import { fitBackground } from "../utils.js";
import { textStyle } from "../constants.js";
export const create = (instance, settings) => {
  instance.bg = instance.add.image(0, 0, "background").setOrigin(0, 0);
  fitBackground(instance, instance.bg); 
  instance.bg.setScrollFactor(0);
  const width = settings.game.config.width / 2;
  const height = settings.game.config.height / 2;
  const instructionsText = `
  Collect rewards, avoid obstacles, and reach the target score to unlock the Decision-Making Room, where you'll face real-life OGBV scenarios.
  Controls:
  - Touch & Drag to Move
  Gameplay:
  - Collect Rewards : Grab coins, gems to increase your score.
  - Avoid Obstacles : Dodge hazards like walls or barriers—collisions. Otherwise game over!
  - Reach Target Score : Earn enough points (e.g., 15) to unlock the Decision-Making Room.
  Decision-Making Room :
  - Choose wisely!! Your decisions affect outcomes and teach valuable lessons.
`;
  instance.add
    .text(width, height - 300, instructionsText, {
      fontFamily: "Cutive",
      fontWeight: "100",
      fontStyle: "normal",
      fontSize: "14px",
      color: "#333333",
      align: "left",
      wordWrap: { width: 300 },
    })
    .setOrigin(0.5, 0);
  instance.continueButton = instance.add
    .sprite(width, height + 250, "continueButton")
    .setScale(0.3)
    .setInteractive();
  instance.continueButton.on("pointerdown", () => {
    instance.scene.start("StartGame"); 
  });
};
