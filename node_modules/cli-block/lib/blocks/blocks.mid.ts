import { repeat } from "@sil/tools";

import { bold } from "../util";
import { useSettings, getFrameWidth } from "../settings";
import { LoggerSettings } from "../types";
import { spaces, centerText, logger } from "../util";
import { border, BorderElement } from "../border";
import { createBlockLine } from "./blocks.line";

// A Mid Block Line
export const createBlockMid = (
  txt = null,
  settings: Partial<LoggerSettings> = {}
): string[] => {
  const cfg = useSettings(settings);

  let lines: string[] = [];

  cfg.autoSpace && lines.push(createBlockLine(null, cfg)[0]);

  let line = ``;
  if (txt)
    line += `${spaces(cfg.indentBlock)}${border(
      BorderElement.midStart,
      cfg
    )}${repeat(
      Math.floor(getFrameWidth(cfg) / 3),
      border(BorderElement.midLine, cfg),
      true
    )}${centerText(
      bold(txt),
      getFrameWidth(cfg) - Math.floor(getFrameWidth(cfg) / 3) * 2
    )}${repeat(
      Math.floor(getFrameWidth(cfg) / 3),
      `${border(BorderElement.midLine, settings)}`,
      true
    )}${border(BorderElement.midEnd, settings)}`;
  else
    line += `${spaces(cfg.indentBlock)}${border(
      BorderElement.midStart,
      cfg
    )}${repeat(
      getFrameWidth(cfg),
      border(BorderElement.midLine, cfg),
      true
    )}${border(BorderElement.midEnd, cfg)}`;

  lines.push(line);

  cfg.autoSpace && lines.push(createBlockLine(null, cfg)[0]);

  return lines;
};
export const blockMid = (
  txt = null,
  settings: Partial<LoggerSettings> = {}
) => {
  let lines = createBlockMid(txt, settings);
  lines.forEach((line) => logger(line, settings));
};
