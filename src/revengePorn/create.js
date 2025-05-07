import { fitBackground } from "../utils.js";
import { textStyle } from "../constants.js";
import { showAlertBox } from "../showAlertBox.js";
export const create = (instance, settings) => {
  // Set background
  instance.background = instance.add
    .image(0, 0, "background")
    .setOrigin(0, 0);
  fitBackground(instance, instance.background); // Fit the background to the screen
  instance.background.setScrollFactor(0);

  const width = settings.game.config.width / 2;
  const height = settings.game.config.height / 2;

  const scenarioText = `
  My ex shared intimate photos of me online without my consent. 
  Now strangers are messaging me about them, and I feel humiliated. 
`;

  instance.add
    .text(width, height - 230, scenarioText, {
      fontFamily: "Cutive",
      fontWeight: "100",
      fontStyle: "normal",
      fontSize: "14px",
      color: "#333333",
      align: "center",
      wordWrap: { width: 300 },
    })
    .setOrigin(0.5, 0)
    .setDepth(1);

  instance.add
    .sprite(width, height - 280, "choiceBoard")
    .setDisplaySize(350, 300)
    .setInteractive()
    .setOrigin(0.5, 0);

  const actionText = ` 
  What should I do? (Pick One)`;

  instance.add
    .text(width, height - 100, actionText, {
      fontFamily: "Cutive",
      fontWeight: "100",
      fontStyle: "normal",
      fontSize: "14px",
      color: "#333333",
      align: "center",
      wordWrap: { width: 300 },
    })
    .setOrigin(0.5, 0);

  const supportiveText = `Request the removal of the photos from the platform.`;

  instance.add
    .text(20, height + 90, supportiveText, {
      fontFamily: "Cutive",
      fontWeight: "100",
      fontStyle: "normal",
      fontSize: "14px",
      color: "#333333",
      align: "center",
      wordWrap: { width: 400 },
    })
    .setDepth(1);

  // Add the "Supportive" button
  instance.supportiveButton = instance.add
    .sprite(width, height + 100, "supportiveBtn")
    .setDisplaySize(400, 50)
    .setInteractive();

  const unSupportiveText = `Try to ignore the situation, hoping it will blow over.`;

  instance.add
    .text(20, height + 150, unSupportiveText, {
      fontFamily: "Cutive",
      fontWeight: "100",
      fontStyle: "normal",
      fontSize: "14px",
      color: "#333333",
      align: "center",
      wordWrap: { width: 400 },
    })
    .setDepth(1);

  // Add the "UnSupportive" button

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
