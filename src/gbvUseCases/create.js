import { fitBackground } from "../utils.js";
import { showAlertBox } from "../showAlertBox.js";
import { contentStyle} from "../constants.js";
export const create = (instance, settings) => {
  const config = settings.game.config;
  instance.background = instance.add.tileSprite(0, 0, config.width, config.height,"background").setOrigin(0, 0);
  fitBackground(instance, instance.background); 
  instance.background.setScrollFactor(0);
  const width = settings.game.config.width / 2;
  const height = settings.game.config.height / 2;
  const scenarioText = instance.scenarioText;
  instance.add
    .text(width, height - 230, scenarioText, {...contentStyle, fontSize: "16px",})
    .setOrigin(0.5, 0)
    .setDepth(1);
  instance.add
    .sprite(width, height - 280, "choiceBoard")
    .setDisplaySize(400, 300)
    .setInteractive()
    .setOrigin(0.5, 0);
  const actionText = instance.actionText;
  instance.add
    .text(width, height - 100, actionText, {...contentStyle, fontSize: "16px",})
    .setOrigin(0.5, 0);
  const supportiveText = instance.supportiveText;
  instance.add
    .text(40, height + 90, supportiveText, {
      ...contentStyle,
      fontSize: "16px",
      wordWrap: { width: 350 },
    })
    .setDepth(1);
  instance.supportiveButton = instance.add
    .sprite(width, height + 100, "supportiveBtn")
    .setDisplaySize(400, 50)
    .setInteractive();
  const unSupportiveText = instance.unSupportiveText;
  instance.add
    .text(40, height + 150, unSupportiveText, {
      ...contentStyle,
      fontSize: "16px",
      wordWrap: { width: 350 },
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
