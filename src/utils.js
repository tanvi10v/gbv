export const fitBackground = (instance, bg) => {
    // Dynamically scale the background to fit the screen
    const scaleX = instance.cameras.main.width / bg.width;
    const scaleY = instance.cameras.main.height / bg.height;
    const scale = Math.min(scaleX, scaleY); // Scale to cover the entire screen
    bg.setScale(scale);
    bg.x = (instance.cameras.main.width - bg.width * scale) / 2;
    bg.y = (instance.cameras.main.height - bg.height * scale) / 2;
}