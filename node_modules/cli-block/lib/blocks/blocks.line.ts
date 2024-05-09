import { LoggerSettings } from "../types";
import { border, BorderElement } from "../border";
import {
  useSettings,
  getContentWidth,
  getPadding,
  getFrameWidth,
} from "../settings";

import { breakText, spaces, spacedText, strWidth, logger } from "../util";

export const createBlockLine = (
  msg: string | null | Array<string> = null,
  settings: Partial<LoggerSettings> = {}
): string[] => {
  const cfg = useSettings(settings);
  let lines = [];

  if (msg !== null) {
    if (typeof msg == "string") msg = breakText(msg, getContentWidth(cfg));

    if (Array.isArray(msg)) {
      msg.forEach((txt, i) => {
        txt =
          i == 0
            ? `${cfg.prefix ? cfg.prefix + " " : ""}${txt}`
            : `${cfg.prefix ? spaces(strWidth(cfg.prefix)) + " " : ""}${txt}`;

        lines.push(
          spaces(cfg.indentBlock) +
            border(BorderElement.side, cfg) +
            spaces(getPadding(cfg)) +
            spacedText(getContentWidth(cfg), txt) +
            spaces(getPadding(cfg)) +
            border(BorderElement.side, cfg)
        );
      });
    }
  } else {
    lines = [
      `${spaces(cfg.indentBlock)}${border(BorderElement.side, cfg)}${spaces(
        getFrameWidth(cfg)
      )}${border(BorderElement.side, cfg)}`,
    ];
  }
  return lines;
};

/*
  
    BLOCK LINE
  
  */
export const blockLine = (
  msg: string | null | Array<string> = null,
  settings: Partial<LoggerSettings> = {}
): void => {
  const lines = createBlockLine(msg, settings);

  lines.forEach((txt) => {
    logger(txt, settings);
  });
};
