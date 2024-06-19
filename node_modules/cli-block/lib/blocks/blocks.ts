import { LoggerSettings } from "../types";
import { BlockType } from "./blocks.model";

import { logger } from "../util";
import { createBlockLine } from "./blocks.line";
import { createBlockRowLine } from "./blocks.row-line";
import { createBlockHeader } from "./blocks.header";
import { createBlockMid } from "./blocks.mid";
import { createBlockFooter } from "./blocks.footer";
import { createBlockTable } from "./blocks.table";
import { createBlockJson } from "./blocks.json";
import { createBlockSettings } from "./blocks.settings";
import {
  createBlockLineError,
  createBlockLineSuccess,
  createBlockLineWarning,
  createBlockErrors,
  createBlockWarnings,
} from "./blocks.line-message";

export const createBlock = async (
  blockType: BlockType,
  content: any,
  settings: Partial<LoggerSettings> = {}
): Promise<string[]> => {
  let lines: string[] = [];

  switch (blockType) {
    // case BlockType.COUNTER:
    //   BLOCK_COUNTER(content, settings);
    //   break;
    // case BlockType.LOADER:
    //   BLOCK_COUNTER(content, settings);
    //   break;
    case BlockType.LINE:
      lines = createBlockLine(content, settings);
      break;
    case BlockType.ROW_LINE:
      lines = createBlockRowLine(content, settings);
      break;
    case BlockType.LINE_SUCCESS:
      lines = createBlockLineSuccess(content, settings);
      break;
    case BlockType.LINE_ERROR:
      lines = createBlockLineError(content, settings);
      break;
    case BlockType.LINE_WARNING:
      lines = createBlockLineWarning(content, settings);
      break;
    case BlockType.START:
      lines = createBlockHeader(content, settings);
      break;
    case BlockType.END:
      lines = createBlockFooter(content, settings);
      break;
    case BlockType.MID:
      lines = createBlockMid(content, settings);
      break;
    case BlockType.TABLE:
      lines = await createBlockTable(content, settings);
      break;
    case BlockType.JSON:
      lines = await createBlockJson(content, settings);
      break;
    case BlockType.SETTINGS:
      lines = await createBlockSettings(content, settings);
      break;
    case BlockType.WARNINGS:
      lines = createBlockWarnings(content, settings);
      break;
    case BlockType.ERRORS:
      lines = createBlockErrors(content, settings);
      break;
  }

  return lines;
};

export const block = async (
  blockType: BlockType,
  content: any,
  settings: Partial<LoggerSettings> = {}
): Promise<void> => {
  const lines = await createBlock(blockType, content, settings);
  lines.forEach((line) => logger(line, settings));
};
