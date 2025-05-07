import { showAlertBox } from "./showAlertBox";

export function loadGBVUseCase(
  level,
  scenarioText,
  actionText,
  supportiveText,
  unSupportiveText, instance, settings) {
  settings.level = level;
  showAlertBox(
    instance,
    `Congratulations! You have reached to Level ${level}. Time to take decision! Select Yes to Enter!`,
    () => instance.scene.start("GBVUseCases", {
      level: level,
      scenarioText: scenarioText,
      actionText: actionText,
      supportiveText: supportiveText,
      unSupportiveText: unSupportiveText,
    }),
    "Enter",
    null
  );
}
