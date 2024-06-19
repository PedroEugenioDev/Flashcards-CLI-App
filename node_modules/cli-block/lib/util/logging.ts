import readline from "readline";
import { promisify } from "@sil/tools";

import { LoggerSettings, LoggerType } from "../types/settings";
import { useSettings } from "../settings";

export const logger = (
  v: string = "",
  settings: Partial<LoggerSettings> = {}
) => {
  const { newLine, logger, logLevel, logOutputLevel } = useSettings(settings);

  if (logOutputLevel < logLevel && logOutputLevel && logLevel) return;

  switch (logger) {
    case LoggerType.CONSOLE:
      console.log(v);
      break;
    case LoggerType.STDOUT:
      process.stdout.write(newLine ? v + "\n" : v);
      break;
  }
};

export const clear = () => {
  process.stdout.clearLine(null);
  process.stdout.cursorTo(0);
};

export const newLine = () => process.stdout.write("\n");
export const asyncNewLine = async () => await promisify(newLine as Function);

export const renewLine = (msg: string): void => {
  readline.cursorTo(process.stdout, 0);
  process.stdout.write(`${msg}`);
};

export const createEmpty = () => {
  return "";
};
export const empty = (settings: Partial<LoggerSettings> = {}) =>
  logger(createEmpty(), settings);
