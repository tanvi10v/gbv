import { fitBackground } from "../utils";
export const create = (instance, settings) => {
  const config = settings.game.config;
  instance.bg = instance.add.tileSprite(0, 0, config.width, config.height,"background").setOrigin(0, 0);
  fitBackground(instance, instance.bg);
  instance.bg.setScrollFactor(0);
  const width = settings.game.config.width / 2;
  const height = settings.game.config.height / 2;

  instance.add
    .sprite(width, height - 250, "gameName")
    .setScale(.3)
    .setOrigin(0.5, 0);

  instance.startButton = instance.add
    .sprite(width, height + 50, "startButton")
    .setScale(0.3)
    .setInteractive();
  instance.howToPlayButton = instance.add
    .sprite(width + 150, height - 250, "howToPlayButton")
    .setScale(0.2)
    .setInteractive();
  instance.startButton.on("pointerdown", () => {
    instance.scene.start("MainGame");
  });
  instance.howToPlayButton.on("pointerdown", () => {
    instance.scene.start("HowToPlay");
  });
};
