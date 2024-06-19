import { repeat } from "@sil/tools";

import { LoggerSettings, LoaderOptions, LoggerType } from "../types";
import { getContentWidth } from "../settings";
import { spacedText, newLine, clear, logger } from "../util";
import { blockLine } from "./blocks.line";

export const blockStepLoader = async (
  args: LoaderOptions = {},
  settings: Partial<LoggerSettings> = {}
): Promise<void> => {
  if (settings.logger === LoggerType.CONSOLE) {
    logger("Loader does not Work with Console.log");
    return;
  }

  let config = {
    message: "[percentage] [loader]",
    // increment: 1,
    width: "100%",
    start: 0,
    step: 0,
    end: 100,
    clear: true,
    charFilled: "▒",
    charUnfilled: "░",
    newLine: false,
    ...args,
  };
  const loaded = Math.round((100 / config.end) * config.step);

  const loadBar = () => {
    const calculatedWidth = () => {
      const contentWidth = getContentWidth() - 7;
      if (typeof config.width === "number") {
        if (config.width > 9) {
          // Assuming the width is bigger than 9, so it can be the number of total characters
          return config.width;
        } else {
          // Otherwise, the number is smaller and will be used as a percentage of the contentWidth
          return contentWidth * config.width;
        }
      }

      // If it's a string and thus a percentage.
      if (typeof config.width === "string" && config.width.includes("%")) {
        const percentageWidth = parseInt(config.width.replace("%", ""));
        return (contentWidth / 100) * percentageWidth;
      } else {
        return contentWidth / 2;
      }
    };

    const width = calculatedWidth();
    const filledPercentage = Math.round(loaded);
    const filled = Math.round((width / 100) * filledPercentage);
    const unfilled = Math.round(width - filled);

    const msg = `${repeat(filled, config.charFilled, true)}${repeat(
      unfilled,
      config.charUnfilled,
      true
    )}`;
    return msg;
  };

  const loaderAction = () => {
    clear();

    const loader = loadBar();
    const percentage = `${loaded}%`;

    let message = config.message
      .replace("[step]", `${config.step + 1}`)
      .replace("[loader]", loader)
      .replace("[percentage]", spacedText(4, percentage));

    blockLine(message, {
      ...settings,
      newLine: false,
    });
    if (config.newLine && config.step === config.end) {
      newLine();
    }
    if (config.clear && config.step === config.end) {
      clear();
    }
  };
  loaderAction();
};
