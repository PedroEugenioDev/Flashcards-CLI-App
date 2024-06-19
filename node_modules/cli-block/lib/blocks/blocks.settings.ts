import { asyncForEach } from "@sil/tools";

import { bold, red } from "../util";
import { useSettings, LoggerSettings, SettingsConfig } from "../settings";
import { createBlockLine } from "./blocks.line";
import { stylizeValue, spaces, logger } from "../util";
import { useConfig } from "../settings/config";

const isExcluded = (exclude: string[], value: string) => {
  if (exclude.length == 0) return false;

  let excluded = false;

  exclude.forEach((exclude) => {
    if (
      (exclude.indexOf("*") > -1 &&
        value.indexOf(exclude.replace("*", "")) > -1) ||
      exclude == value
    ) {
      excluded = true;
    }
  });

  return excluded;
};

// Auto Settings display
export const createBlockSettings = async (
  obj: any,
  settings: Partial<LoggerSettings> = {},
  config: SettingsConfig | null = null
): Promise<string[]> => {
  settings = useSettings(settings);
  config = useConfig(config);

  const settingLines = [];
  const lines: string[] = [];

  await asyncForEach(Object.keys(obj), (key: string) => {
    let value = stylizeValue(obj[key]);
    let error: boolean = false;

    ["src", "dest", "template"].includes(key) && !obj[key] && (error = true);

    if (error) value = `${red("×")} ${value}`;

    if (config.include.length > 0) {
      config.include.includes(key) &&
        settingLines.push(`${bold(key)}${spaces(20, key)}${value}`);
    } else if (!isExcluded(config.exclude, key)) {
      settingLines.push(`${bold(key)}${spaces(20, key)}${value}`);
    }
  });

  config.margin &&
    config.marginTop &&
    lines.push(createBlockLine(null, settings)[0]);
  config.header && lines.push(createBlockLine([config.header], settings)[0]);
  settingLines.forEach((line) => {
    lines.push(createBlockLine(line, settings)[0]);
  });
  config.footer && lines.push(createBlockLine([config.footer], settings)[0]);
  config.margin &&
    config.marginBottom &&
    lines.push(createBlockLine(null, settings)[0]);

  return lines;
};

export const blockSettings = async (
  obj: any,
  settings: Partial<LoggerSettings> = {},
  config: SettingsConfig | null = null
): Promise<void> => {
  const lines = await createBlockSettings(obj, settings, config);
  lines.forEach((line) => logger(line, settings));
};
