import { contentStyle } from "./constants";

/**
 * Displays a reusable alert box with "Yes" and "No" buttons.
 * @param {Phaser.Scene} scene - The current Phaser scene.
 * @param {string} message - The message to display in the alert box.
 * @param {function} onYes - Callback function when "Yes" is clicked.
 * @param {function} onNo - Callback function when "No" is clicked.
 */
export function showAlertBox(scene, message, onYes, yesText) {
  const overlay = scene.add
    .rectangle(
      0,
      0,
      scene.cameras.main.width,
      scene.cameras.main.height,
      0x000000,
      0.7
    )
    .setOrigin(0, 0);
  const boxWidth = 300;
  const boxHeight = 200;
  const box = scene.add
    .rectangle(
      scene.cameras.main.centerX,
      scene.cameras.main.centerY,
      boxWidth,
      boxHeight,
      0xe0f7fa
    )
    .setStrokeStyle(2, 0x000000)
    .setOrigin(0.5, 0.5)
    .setDepth(2);
  const text = scene.add
    .text(box.x, box.y - 50, message, {
      ...contentStyle,
      wordWrap: { width: boxWidth - 20 },
    })
    .setOrigin(0.5, 0.5)
    .setDepth(2);
  const yesButton = scene.add
    .text(box.x, box.y + 50, yesText, contentStyle)
    .setOrigin(0.5, 0.5)
    .setInteractive()
    .setDepth(2);
  yesButton.on("pointerdown", () => {
    if (onYes) onYes();
    cleanup();
  });
  function cleanup() {
    overlay.destroy();
    box.destroy();
    text.destroy();
    yesButton.destroy();
  }
}
