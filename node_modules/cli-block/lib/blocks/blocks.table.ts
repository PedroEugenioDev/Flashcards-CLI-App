import { bold } from "../util";
import { LoggerSettings, SettingsConfig } from "../types";
import { border, BorderElement } from "../border";
import { useSettings, getContentWidth } from "../settings";
import { spacedText, stylizeValue, logger } from "../util";
import { createBlockLine } from "./blocks.line";
import { useConfig } from "../settings/config";

export const createBlockTable = async (
  table: any[],
  settings: Partial<LoggerSettings> = {},
  config: SettingsConfig | null = null
): Promise<string[]> => {
  settings = useSettings(settings);
  config = useConfig(config);

  const getTableWidth = (table: any[]): number => {
    let height = 1;
    table.forEach((item) => {
      if (typeof item == "object" && height < item.length) height = item.length;
    });
    return height;
  };

  const width =
    Math.floor(getContentWidth(settings) / getTableWidth(table)) - 2;

  // Check if all tables

  table = table.map((item) =>
    typeof item == "string" ? (item = [item]) : (item = item)
  );

  settings.tableSpace && (table = [[], ...table, []]);
  settings.tableHeader && table.splice(2, 0, []);
  // for (let r = 0; r < table.length; r++) {

  table = table.map((row) => {
    return (row = [
      ...row,
      ...new Array(getTableWidth(table) - row.length),
    ]).map((i) =>
      i == undefined
        ? (i = spacedText(width, ""))
        : (i = spacedText(width, stylizeValue(i)))
    );
  });

  settings.tableHeader &&
    (table[1] = table[1].map((item) => (item = `${bold(item)}`)));

  let lines = [];
  config.margin &&
    config.marginTop &&
    lines.push(createBlockLine(null, settings)[0]);
  config.header && lines.push(createBlockLine(config.header, settings)[0]);
  table.forEach((row) => {
    lines.push(
      createBlockLine(
        row.join(` ${border(BorderElement.side, settings)} `),
        settings
      )
    );
  });
  config.footer && lines.push(createBlockLine(config.footer, settings)[0]);
  config.margin &&
    config.marginBottom &&
    lines.push(createBlockLine(null, settings)[0]);
  return lines;
};

export const blockTable = async (
  table: any[],
  settings: Partial<LoggerSettings> = {},
  config: SettingsConfig | null = null
): Promise<void> => {
  const cfg = useSettings(settings);

  const lines = await createBlockTable(table, cfg, config);

  lines.forEach((line) => {
    logger(line, cfg);
  });
};
