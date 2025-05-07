export const hideCallout = (calloutBox, calloutText) => {
    calloutBox.setVisible(false);
    calloutText.setVisible(false);
}
export const showCallout = (x, y, message, calloutBox, calloutText) => {
    calloutBox.setPosition(x, y).setVisible(true);
    calloutText.setPosition(x, y).setText(message).setVisible(true);
}
export const createCallout = (instance, settings) => {
    settings.calloutBox = instance.add.rectangle(0, 0, 150, 50, 0x000000).setOrigin(0.5, 0.5).setAlpha(0.8).setVisible(false).setDepth(1); 
    settings.calloutText = instance.add.text(0, 0, 'Hello!', {
        fontFamily: 'Arial',
        fontSize: '16px',
        color: '#ffffff',
        align: 'center',
        wordWrap: { width: 140 } 
    }).setOrigin(0.5, 0.5).setVisible(false).setDepth(1); 
    return { instance, settings };
}