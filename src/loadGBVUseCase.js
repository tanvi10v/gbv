import { showAlertBox } from "./showAlertBox";

export function loadGBVUseCase(
  gbvCasesConfig, instance, settings) {
  settings.level = gbvCasesConfig.level;
  showAlertBox(
    instance,
    `Congratulations! You have reached to Level ${gbvCasesConfig.level}. Time to take decision! Select Yes to Enter!`,
    () => instance.scene.start("GBVUseCases", gbvCasesConfig),
    "Enter",
    null
  );
}
