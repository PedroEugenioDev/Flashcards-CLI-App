import { repeat } from "@sil/tools";

import { useSettings, getFrameWidth } from "../settings";
import { LoggerSettings } from "../types";
import { spaces, centerText, logger, bold } from "../util";
import { border, BorderElement } from "../border";
import { createBlockLine } from "./blocks.line";

// Closing Block
export const createBlockFooter = (
  txt: string | null = null,
  settings: Partial<LoggerSettings> = {}
): string[] => {
  const cfg = useSettings(settings);

  let lines: string[] = [];

  cfg.autoSpace && lines.push(createBlockLine(null, cfg)[0]);
  if (txt)
    lines.push(
      `${spaces(cfg.indentBlock)}${border(
        BorderElement.bottomStart,
        cfg
      )}${repeat(
        Math.floor(getFrameWidth(cfg) / 3),
        border(BorderElement.endLine, cfg),
        true
      )}${centerText(
        bold(txt),
        getFrameWidth(cfg) - Math.floor(getFrameWidth(cfg) / 3) * 2
      )}${repeat(
        Math.floor(getFrameWidth(cfg) / 3),
        `${border(BorderElement.endLine, cfg)}`,
        true
      )}${border(BorderElement.bottomEnd, cfg)}`
    );
  else
    lines.push(
      `${spaces(cfg.indentBlock)}${border(
        BorderElement.bottomStart,
        cfg
      )}${repeat(
        getFrameWidth(cfg),
        `${border(BorderElement.endLine, cfg)}`,
        true
      )}${border(BorderElement.bottomEnd, cfg)}`
    );

  return lines;
};

export const blockFooter = (
  txt = null,
  settings: Partial<LoggerSettings> = {}
) => {
  let lines = createBlockFooter(txt, settings);
  lines.forEach((line) => logger(line, settings));
};
