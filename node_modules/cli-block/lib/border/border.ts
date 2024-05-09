import { useSettings } from "../settings";
import { LoggerSettings } from "../types";
import * as styles from "../util";

import { BorderCharacters, BorderElement } from "./border.model";

const borderCharacters: BorderCharacters = {
  single: {
    startLine: "━",
    endLine: "━",
    midLine: "─",
    midBreakTop: "┬",
    midBreakBottom: "┴",
    side: "┃",
    topStart: "┏",
    topEnd: "┓",
    bottomStart: "┗",
    bottomEnd: "┛",
    midStart: "┠",
    midEnd: "┨",
  },
  double: {
    startLine: "═",
    endLine: "═",
    midLine: "─",
    midBreakTop: "┬",
    midBreakBottom: "┴",
    side: "║",
    topStart: "╔",
    topEnd: "╗",
    bottomStart: "╚",
    bottomEnd: "╝",
    midStart: "╟",
    midEnd: "╢",
  },
  fat: {
    startLine: "▘",
    endLine: "▗",
    midLine: "▄",
    midBreakTop: "┬",
    midBreakBottom: "┴",
    side: "▞",
    topStart: "▛",
    topEnd: "▜",
    bottomStart: "▙",
    bottomEnd: "▟",
    midStart: "▄",
    midEnd: "▄",
  },
};

export const border = (
  type: BorderElement,
  settings: Partial<LoggerSettings> = {}
): string => {
  const cfg = useSettings(settings);

  let char = borderCharacters[cfg.borderType][type] || "";

  if (styles[cfg.borderColor]) char = styles[cfg.borderColor](char);

  return char;
};
