import { BorderType, BorderColor } from "../border/border.model";
import { LoggerSettings, LoggerLevel, LoggerType } from "../types/settings";

export const defaultSettings: LoggerSettings = {
  borderType: BorderType.single,
  borderColor: BorderColor.dim,
  frameWidth: 80,
  indentBlock: 5,
  prefix: "",
  newLine: true,
  autoSpace: true,
  tableHeader: true,
  tableSpace: true,
  padding: -1,
  logger: LoggerType.STDOUT,
  logLevel: LoggerLevel.VERBOSE,
  logOutputLevel: LoggerLevel.VERBOSE,
};

export const useSettings = (
  settings: Partial<LoggerSettings> = {}
): LoggerSettings => {
  return {
    ...defaultSettings,
    ...settings,
  };
};

export const getFrameWidth = (
  settings: Partial<LoggerSettings> = {}
): number => {
  const cfg = useSettings(settings);
  return process.stdout.columns < cfg.frameWidth + cfg.indentBlock * 2 + 2
    ? process.stdout.columns - cfg.indentBlock * 2
    : cfg.frameWidth;
};

export const getPadding = (settings: Partial<LoggerSettings> = {}): number =>
  (settings = useSettings(settings)) && settings.padding > -1
    ? settings.padding
    : getFrameWidth(settings) / 10;

export const getContentWidth = (
  settings: Partial<LoggerSettings> = {}
): number => {
  const cfg = useSettings(settings);
  return getFrameWidth(cfg) - getPadding(cfg) * 2;
};
