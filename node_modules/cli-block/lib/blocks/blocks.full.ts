import { useSettings, LoggerSettings, SettingsConfig } from "../settings";
import { createBlockLine } from "./blocks.line";
import { createBlockHeader } from "./blocks.header";
import { createBlockFooter } from "./blocks.footer";
import { logger } from "../util";
import { useConfig } from "../settings/config";

// Auto Settings display
export const createBlockFull = (
  txt: string,
  settings: Partial<LoggerSettings> = {},
  config: SettingsConfig | null = null
): string[] => {
  settings = useSettings(settings);
  config = useConfig(config);

  const content = createBlockLine(txt);
  let lines: string[] = [];

  config.margin && config.marginTop && lines.push("\n");
  lines = [...lines, ...createBlockHeader(config.header)];
  config.margin && lines.push(createBlockLine(null, settings)[0]);
  content.forEach((line) => lines.push(line));
  config.margin && lines.push(createBlockLine(null, settings)[0]);
  lines = [...lines, ...createBlockFooter(config.footer)];
  config.margin && config.marginBottom && lines.push("\n");

  return lines;
};

export const blockFull = async (
  txt: string,
  settings: Partial<LoggerSettings> = {},
  config: SettingsConfig | null = null
): Promise<void> =>
  createBlockFull(txt, settings, config).forEach((line) =>
    logger(line, settings)
  );
