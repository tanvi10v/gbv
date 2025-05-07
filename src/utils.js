import { showAlertBox } from "./showAlertBox";
export const fitBackground = (instance, bg) => {
  const scaleX = instance.cameras.main.width / bg.width;
  const scaleY = instance.cameras.main.height / bg.height;
  const scale = Math.min(scaleX, scaleY);
  bg.setScale(scale);
  bg.x = (instance.cameras.main.width - bg.width * scale) / 2;
  bg.y = (instance.cameras.main.height - bg.height * scale) / 2;
};

export const loadGBVUseCase = (gbvCasesConfig, instance, settings) => {
  instance.physics.pause();
  instance.tweens.pauseAll();
  settings.obs;
  settings.level = gbvCasesConfig.level;
  showAlertBox(
    instance,
    `Congratulations! You have reached to 
    Level ${gbvCasesConfig.level}. 
    Time to take decision! 
    Select Yes to Enter!`,
    () => instance.scene.start("GBVUseCases", gbvCasesConfig),
    "YES",
    null
  );
};
