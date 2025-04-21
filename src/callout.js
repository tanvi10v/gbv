export const hideCallout = (calloutBox, calloutText) => {
    // Hide the callout
    calloutBox.setVisible(false);
    calloutText.setVisible(false);
}
export const showCallout = (x, y, message, calloutBox, calloutText) => {
    // Update the callout position and text
    calloutBox.setPosition(x, y).setVisible(true);
    calloutText.setPosition(x, y).setText(message).setVisible(true);
}

export const createCallout = (instance, settings) => {
    // Create a background box for the callout
    settings.calloutBox = instance.add.rectangle(0, 0, 150, 50, 0x000000).setOrigin(0.5, 0.5).setAlpha(0.8).setVisible(false).setDepth(1); // Set the depth to 1 to be above the background
    // Create a text object for the callout
    settings.calloutText = instance.add.text(0, 0, 'Hello!', {
        fontFamily: 'Arial',
        fontSize: '16px',
        color: '#ffffff',
        align: 'center',
        wordWrap: { width: 140 } // Wrap text within the box width
    }).setOrigin(0.5, 0.5).setVisible(false).setDepth(1); // Set the depth to 1 to be above the background


    return { instance, settings };
}