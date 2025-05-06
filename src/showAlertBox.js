/**
     * Displays a reusable alert box with "Yes" and "No" buttons.
     * @param {Phaser.Scene} scene - The current Phaser scene.
     * @param {string} message - The message to display in the alert box.
     * @param {function} onYes - Callback function when "Yes" is clicked.
     * @param {function} onNo - Callback function when "No" is clicked.
     */
export function showAlertBox(scene, message, onYes, onNo) {
    // Create a semi-transparent background overlay
    const overlay = scene.add.rectangle(0, 0, scene.cameras.main.width, scene.cameras.main.height, 0x000000, 0.7)
        .setOrigin(0, 0);

    // Create the alert box
    const boxWidth = 400;
    const boxHeight = 200;
    const box = scene.add.rectangle(scene.cameras.main.centerX, scene.cameras.main.centerY, boxWidth, boxHeight, 0xffffff)
        .setStrokeStyle(2, 0x000000)
        .setOrigin(0.5, 0.5).setDepth(1);

    // Add the message text
    const text = scene.add.text(box.x, box.y - 50, message, {
        fontFamily: 'Arial',
        fontSize: '18px',
        color: '#000000',
        align: 'center',
        wordWrap: { width: boxWidth - 20 }
    }).setOrigin(0.5, 0.5).setDepth(1);

    // Add "Yes" button
    const yesButton = scene.add.text(box.x - 75, box.y + 50, 'Yes', {
        fontFamily: 'Arial',
        fontSize: '20px',
        color: '#ffffff',
        backgroundColor: '#00ff00'
    }).setOrigin(0.5, 0.5).setInteractive().setDepth(1);

    yesButton.on('pointerdown', () => {
        if (onYes) onYes(); // Call the "Yes" callback
        cleanup();
    });

    // Add "No" button
    const noButton = scene.add.text(box.x + 75, box.y + 50, 'No', {
        fontFamily: 'Arial',
        fontSize: '20px',
        color: '#ffffff',
        backgroundColor: '#ff0000'
    }).setOrigin(0.5, 0.5).setInteractive().setDepth(1);

    noButton.on('pointerdown', () => {
        if (onNo) onNo(); // Call the "No" callback
        cleanup();
    });

    // Cleanup function to remove the alert box
    function cleanup() {
        overlay.destroy();
        box.destroy();
        text.destroy();
        yesButton.destroy();
        noButton.destroy();
    }
}
