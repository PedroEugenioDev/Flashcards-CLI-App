import { LoggerSettings } from "../types";
import { useSettings } from "../settings";
import { green, red, yellow, logger } from "../util";
import { createBlockLine, createBlockMid, createBlockFooter } from "./";
/*

  BLOCK LINES SUCCESS / ERROR / WARNING

*/

// lINE With auto checkmark for success
export const createBlockLineSuccess = (
  msg: string | string[],
  settings: Partial<LoggerSettings> = {}
): string[] =>
  createBlockLine(msg, { ...useSettings(settings), prefix: green("✔") });

export const blockLineSuccess = (
  msg: string,
  settings: Partial<LoggerSettings> = {}
) => {
  createBlockLineSuccess(msg, settings).forEach((txt) => logger(txt, settings));
};

// LINE with auto X for errors
export const createBlockLineError = (
  msg: string | string[],
  settings: Partial<LoggerSettings> = {}
): string[] =>
  createBlockLine(msg, { ...useSettings(settings), prefix: red("×") });

export const blockLineError = (
  msg: string,
  settings: Partial<LoggerSettings> = {}
) =>
  createBlockLineError(msg, settings).forEach((txt) => logger(txt, settings));

// LINE with auto ! for warnings
export const createBlockLineWarning = (
  msg: string | string[],
  settings: Partial<LoggerSettings> = {}
): string[] =>
  createBlockLine(msg, { ...useSettings(settings), prefix: yellow("!") });

export const blockLineWarning = (
  msg: string,
  settings: Partial<LoggerSettings> = {}
) =>
  createBlockLineWarning(msg, settings).forEach((txt) => logger(txt, settings));

export const createBlockWarnings = (
  warning: string[],
  settings: Partial<LoggerSettings> = {}
): string[] => {
  const cfg = useSettings(settings);

  if (!warning || warning.length < 1) return [];

  let lines: string[] = [];

  lines.push(createBlockLine(null, cfg)[0]);
  lines.push(createBlockMid(`${yellow("! Warnings")}`, cfg)[0]);
  warning.forEach((error) => {
    lines.push(createBlockLineWarning(error, cfg)[0]);
  });
  return lines;
};
export const blockWarnings = (
  msg: string[],
  settings: Partial<LoggerSettings> = {}
) => createBlockWarnings(msg, settings).forEach((txt) => logger(txt, settings));

export const createBlockErrors = (
  error: string[],
  settings: Partial<LoggerSettings> = {}
): string[] => {
  const cfg = useSettings(settings);

  if (!error || error.length < 1) return [];

  let lines: string[] = [];

  lines.push(createBlockLine(null, cfg)[0]);
  lines.push(createBlockMid(`${red("× Errors")}`, cfg)[0]);
  error.forEach((error) => {
    lines.push(createBlockLineError(error, cfg)[0]);
  });
  lines.push(createBlockFooter(null, cfg)[0]);

  return lines;
};

export const blockErrors = (
  msg: string[],
  settings: Partial<LoggerSettings> = {}
) => createBlockErrors(msg, settings).forEach((txt) => logger(txt, settings));
