export const fitBackground = (instance, bg) => {
    const scaleX = instance.cameras.main.width / bg.width;
    const scaleY = instance.cameras.main.height / bg.height;
    const scale = Math.min(scaleX, scaleY); 
    bg.setScale(scale);
    bg.x = (instance.cameras.main.width - bg.width * scale) / 2;
    bg.y = (instance.cameras.main.height - bg.height * scale) / 2;
}