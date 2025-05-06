import { fitBackground } from "../utils.js";
import { textStyle } from "../constants.js";
import { showAlertBox } from "../showAlertBox.js";
export const create = (instance, settings) => {
  // Set background
  instance.qBoard = instance.add.image(0, 0, "questionBoard").setOrigin(0, 0);
  fitBackground(instance, instance.qBoard); // Fit the background to the screen
  instance.qBoard.setScrollFactor(0);

  const width = settings.game.config.width / 2;
  const height = settings.game.config.height / 2;
  // Add the title text
  instance.add
    .text(
      width - 0.8 * width,
      height - 0.2 * height,
      "When your friend says, `I feel like I can't talk to anyone anymore.`",
      {
        ...textStyle,
        fontSize: "14px",
        shadow: "none",
        color: "#000",
        strokeThickness: 0,
      }
    )
    .setDepth(1);

  instance.add
    .text(width - 0.8 * width, height - 30, "What will you say? (Pick One)", {
      ...textStyle,
      fontSize: "14px",
      shadow: "none",
      color: "#000",
      strokeThickness: 0,
    })
    .setDepth(1);

  instance.add
    .text(
      width - 180,
      height + 25,
      "That sounds tough. \n Do you want to talk \nabout it?",
      {
        ...textStyle,
        fontSize: "14px",
        shadow: "none",
        color: "#000",
        strokeThickness: 0,
      }
    )
    .setDepth(1);
  // Add the "Supportive" button
  instance.supportiveButton = instance.add
    .sprite(width - 0.1 * width, height + 0.1 * height, "supportiveBtn")
    .setScale(4)
    .setInteractive();

  instance.add
    .text(
      width - 170,
      height + 120,
      "You're overreacting. \nIt can't be that bad.",
      {
        ...textStyle,
        fontSize: "14px",
        shadow: "none",
        color: "#000",
        strokeThickness: 0,
      }
    )
    .setDepth(1);

  // Add the "UnSupportive" button

  instance.unSupportiveButton = instance.add
    .sprite(width - 0.1 * width, height + 150, "unsupportiveBtn")
    .setScale(4)
    .setInteractive();

  instance.supportiveButton.on("pointerdown", () => {
    showAlertBox(
      instance,
      "Yes you are correct and continue your game!!",
      () => {
        instance.scene.start("MainGame");
      },
      null
    );
  });

  instance.unSupportiveButton.on("pointerdown", () => {
    showAlertBox(
      instance,
      "Yes you are not correct! please try again and choose the correct option",
      null,
      null
    );
  });
};
