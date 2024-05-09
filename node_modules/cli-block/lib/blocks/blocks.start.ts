import { bold } from "../util";
import { LoggerSettings } from "../types";
import { useSettings } from "../settings";
import { spaces, logger, createEmpty } from "../util";

// Start the code with a block with a title.
export const createStart = (
  msg: string,
  settings: Partial<LoggerSettings> = {}
): string[] => {
  const cfg = useSettings(settings);
  const lines: string[] = [];
  lines.push(createEmpty());
  lines.push(`${spaces(cfg.indentBlock)} ${bold().blue(msg)}`);
  lines.push(createEmpty());

  return lines;
};
export const start = (
  msg: string,
  settings: Partial<LoggerSettings> = {}
): void => createStart(msg, settings).forEach((line) => logger(line));
