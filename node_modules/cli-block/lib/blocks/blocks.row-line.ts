import { LoggerSettings } from "../types";
import { useSettings, defaultSettings, getContentWidth } from "../settings";
import { logger, spacedText, toStringValue } from "../util";
import { createBlockLine } from "./blocks.line";
/*

  BLOCK ROW LINE

*/
export const createBlockRowLine = (
  arr: any[],
  settings: Partial<LoggerSettings> = {}
): string[] => {
  let str = "";
  arr = arr.map((item) => toStringValue(item));
  let COLUMN_WIDTH = Math.floor(getContentWidth(settings) / arr.length) - 1;

  arr.forEach((item) => {
    str = str + spacedText(COLUMN_WIDTH, item.toString());
  });

  return createBlockLine(str);
};

export const blockRowLine = (
  arr: Array<any>,
  settings: Partial<LoggerSettings> = {}
): void =>
  createBlockRowLine(arr, settings).forEach((line) => logger(line, settings));
