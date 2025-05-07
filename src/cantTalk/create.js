import { fitBackground } from "../utils.js";
import { showAlertBox } from "../showAlertBox.js";
import { contentStyle} from "../constants.js";
export const create = (instance, settings) => {
  instance.background = instance.add.image(0, 0, "background").setOrigin(0, 0);
  fitBackground(instance, instance.background); 
  instance.background.setScrollFactor(0);
  const width = settings.game.config.width / 2;
  const height = settings.game.config.height / 2;
  const scenarioText = `
  When your friend says, 
  "I feel like I can't talk to 
  anyone anymore."
`;
  instance.add
    .text(width, height - 230, scenarioText, contentStyle)
    .setOrigin(0.5, 0)
    .setDepth(1);
  instance.add
    .sprite(width, height - 280, "choiceBoard")
    .setDisplaySize(350, 300)
    .setInteractive()
    .setOrigin(0.5, 0);
  const actionText = ` 
  What will you say? (Pick One)`;
  instance.add
    .text(width, height - 100, actionText, contentStyle)
    .setOrigin(0.5, 0);
  const supportiveText = `That's tough. Do you want to talk about it?`;
  instance.add
    .text(20, height + 90, supportiveText, {
      ...contentStyle,
      wordWrap: { width: 400 },
    })
    .setDepth(1);
  instance.supportiveButton = instance.add
    .sprite(width, height + 100, "supportiveBtn")
    .setDisplaySize(400, 50)
    .setInteractive();
  const unSupportiveText = `You're overreacting. It can't be that bad.`;
  instance.add
    .text(20, height + 150, unSupportiveText, {
      ...contentStyle,
      wordWrap: { width: 400 },
    })
    .setDepth(1);
  instance.unSupportiveButton = instance.add
    .sprite(width, height + 160, "unsupportiveBtn")
    .setDisplaySize(400, 50)
    .setInteractive();
  instance.supportiveButton.on("pointerdown", () => {
    showAlertBox(
      instance,
      "Yes you are correct! \n Please continue your game!!",
      () => {
        instance.scene.start("MainGame");
      },
      "Continue",
      null
    );
  });
  instance.unSupportiveButton.on("pointerdown", () => {
    showAlertBox(
      instance,
      "Incorrect! Please try again.",
      null,
      "Go Back",
      null
    );
  });
};
