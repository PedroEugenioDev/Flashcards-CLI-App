import { LoggerSettings, CounterOptions, LoggerType } from "../types";
import { clear, logger } from "../util";
import { blockLine } from "./blocks.line";

export const blockCounter = async (
  args: CounterOptions = {},
  settings: Partial<LoggerSettings> = {}
): Promise<void> => {
  if (settings.logger === LoggerType.CONSOLE) {
    logger("Counter does not Work with Console.log");
    return;
  }
  const config: CounterOptions = {
    message: "My message [count] to go",
    increment: 1,
    start: 0,
    end: 100,
    interval: 100,
    ...args,
  };

  // Define variables
  let i = config.start;
  let step = 0;

  const messageCount = config.messages?.length || 0;
  const stepsCount =
    (config.start > config.end
      ? config.start - config.end + 1
      : config.end - config.start + 1) / config.increment;
  const doSteps = messageCount > 0 && messageCount === stepsCount;
  const countDown = config.start > config.end;

  // Prepare action
  const counterAction = () => {
    clear();

    let message = doSteps
      ? config.messages[step].replace("[count]", i.toString())
      : config.message.replace("[count]", i.toString());

    blockLine(message, {
      ...settings,
      newLine: i === config.end,
    });

    i = countDown ? i - config.increment : i + config.increment;
    doSteps && step++;
  };

  counterAction();
  // Do the Interval
  return await new Promise((resolve) => {
    let count = setInterval(() => {
      counterAction();

      const isEnding =
        (countDown ? i === config.end - 1 : i === config.end + 1) ||
        (doSteps && step === stepsCount);

      if (isEnding) {
        // if (countDown) NEW_LINE();
        resolve();
        clearInterval(count);
      }
    }, config.interval);
  });
  // return;
};
