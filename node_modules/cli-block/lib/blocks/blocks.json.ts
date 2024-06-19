import { useSettings, LoggerSettings } from "../settings";
import { highlight } from "cli-highlight";
import { logger } from "../util";
import { createBlockLine } from "./blocks.line";

export const createBlockJsonLines = async(
  obj: Object,
): Promise<string[]> => {
  const text = highlight(JSON.stringify(obj, null, "\t"), {
    language: "json",
    ignoreIllegals: true,
  });
  const JSONlines = text.split("\n");
  return JSONlines;
}

export const createBlockJson = async (
  obj: Object,
  settings: Partial<LoggerSettings> = {}
): Promise<string[]> => {

  const cfg = useSettings(settings);
  const JSONlines = await createBlockJsonLines(obj);

  let lines: string[] = [];

  lines.push(createBlockLine(null, cfg)[0]);
  JSONlines.forEach((line) => {
    lines.push(createBlockLine(line.replace(/\t/g, " "), cfg)[0]);
  });
  lines.push(createBlockLine(null, cfg)[0]);

  return lines;
};

export const blockJson = async (
  obj: Object,
  settings: Partial<LoggerSettings> = {}
) => {
  const lines = await createBlockJson(obj, settings);

  lines.forEach((line) => {
    logger(line, settings);
  });
};
