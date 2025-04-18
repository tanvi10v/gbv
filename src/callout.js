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