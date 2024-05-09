
import {
  blockLine,
  blockMid,
  blockHeader,
  blockFooter,
  blockLineError,
  blockLineWarning,
  blockLineSuccess,
  blockSettings,
  start,
  blockJson,
  blockTable,
  blockCounter,
  blockLoader,
  blockFull,
  blockStepLoader,
} from "../lib/blocks";
import { BorderColor, BorderType } from "../lib/border/border.model";
import { defaultSettings } from "../lib/settings/";

let cliSettings = {
  borderColor: BorderColor.yellow,
  borderType: BorderType.fat,
};

const JSON_EXAMPLE = {
  String: "is a test",
  Number: 2000,
  Object: { item1: "value1", item2: "value1" },
  Array: ["item1", "item2"],
  ObjectArray: [{ item1: "value1" }, { item2: "value2" }],
};

const TABLE_EXAMPLE = [
  ["Type", "Default", "Description"],
  ["Boolean", false, "Does work", "item5"],
  ["String", "Some item", "Yes, or no"],
  ["Number", 5, "How much?"],
];

const show = async () => {
  start("The Script Title", cliSettings);
  blockHeader("hoi");
  blockLine();
  blockLine("with content");
  blockMid();
  blockMid("JSON");
  await blockJson(JSON_EXAMPLE);
  blockMid("Settings");
  await blockSettings(JSON_EXAMPLE);
  blockMid("default settings");
  await blockSettings(defaultSettings);
  blockMid("default table");
  await blockTable(TABLE_EXAMPLE);
  blockMid("Full width, headerless table");

  await blockTable(TABLE_EXAMPLE, {
    tableHeader: false,
    tableSpace: false,
    padding: 0,
  });

  blockMid("Specials");
  blockLineError("An error");
  blockLineWarning("A warning");
  blockLineSuccess("Yes, this works");
  blockMid("Content");
  blockLine(
    `Fusce interdum blandit ligula, eu ornare tellus convallis ut. Praesent ut elit tempor, luctus urna ac, mattis est. Donec tincidunt sollicitudin eleifend. Donec eu rutrum arcu. Pellentesque lobortis ante libero, vel ultrices mi cursus at. Nullam et leo in justo lacinia blandit in eu quam. Donec magna lectus, posuere sed urna sit amet, venenatis vehicula libero. Donec sed sagittis elit. Suspendisse at dolor vel ipsum aliquet pulvinar sit amet accumsan sapien. Vivamus eget odio mi. Cras tempus vel sapien non viverra. Proin id placerat ipsum. In cursus nisi vel nulla bibendum finibus. Curabitur consequat tortor at tellus rutrum, vel rhoncus magna tempus. Quisque et nisl ac magna cursus aliquet. Donec eget luctus diam. Nulla et lectus lacinia, faucibus risus eget, eleifend neque. Aenean ut luctus est. Mauris dui libero, dapibus vel vehicula quis, convallis vitae neque. Nunc faucibus lacus urna, a accumsan nulla dapibus in. Duis suscipit augue sed magna efficitur, id imperdiet arcu gravida. Cras luctus, eros sed varius luctus, erat urna ullamcorper risus, non scelerisque felis velit luctus sem. Quisque arcu ipsum, vestibulum quis efficitur pretium, hendrerit ac eros. Curabitur at ligula sed mauris pretium euismod. Donec accumsan nisi quis sapien elementum consectetur.`
  );
  blockMid("Count down");
  await blockCounter({
    message: "Still [count] seconds to go...",
    start: 5,
    end: 0,
    increment: 1,
    interval: 250,
  });
  blockMid("Count up");
  await blockCounter({
    message: "Loading the end [count]%",
    start: 0,
    end: 100,
    increment: 1,
    interval: 25,
  });
  blockMid("Count up, multi message");
  await blockCounter({
    messages: [
      `Starting with [count]`,
      `And this is [count]`,
      `still [count] to go`,
      `now about [count]`,
      `what a joy..:)`,
      `finally [count]`,
    ],
    start: 0,
    end: 5,
    increment: 1,
    interval: 250,
  });
  blockMid("Count down, multi message");
  await blockCounter({
    messages: [
      `Starting with [count]`,
      `And this is [count]`,
      `still [count] to go`,
      `now about [count]`,
      `what a joy..:)`,
      `finally [count]`,
    ],
    start: 5,
    end: 0,
    increment: 1,
    interval: 250,
  });
  blockMid("Loader");
  await blockLoader();
  blockMid("Loader Custom");
  await blockLoader({
    message: "[loader] [percentage] to go",
    increment: 2,
    width: "50",
    start: 0,
    end: 100,
    interval: 50,
    charFilled: "╱",
    charUnfilled: "╲",
  });

  let i = 0;

  const loaderInterval = setInterval(async () => {
    await blockStepLoader({
      message: "[loader] [percentage] to go",
      width: "50",
      start: 0,
      end: 100,
      step: i,
    });
    i++;

    if (i - 1 == 100) {
      clearInterval(loaderInterval);
    }
  }, 25);

  blockFooter();
};

const full = async () => {
  blockFull(
    `Fusce interdum blandit ligula, eu ornare tellus convallis ut. Praesent ut elit tempor, luctus urna ac, mattis est. Donec tincidunt sollicitudin eleifend. Donec eu rutrum arcu. Pellentesque lobortis ante libero, vel ultrices mi cursus at. Nullam et leo in justo lacinia blandit in eu quam. Donec magna lectus, posuere sed urna sit amet, venenatis vehicula libero. Donec sed sagittis elit. Suspendisse at dolor vel ipsum aliquet pulvinar sit amet accumsan sapien. Vivamus eget odio mi. Cras tempus vel sapien non viverra. Proin id placerat ipsum. In cursus nisi vel nulla bibendum finibus. Curabitur consequat tortor at tellus rutrum, vel rhoncus magna tempus. Quisque et nisl ac magna cursus aliquet. Donec eget luctus diam. Nulla et lectus lacinia, faucibus risus eget, eleifend neque. Aenean ut luctus est. Mauris dui libero, dapibus vel vehicula quis, convallis vitae neque. Nunc faucibus lacus urna, a accumsan nulla dapibus in. Duis suscipit augue sed magna efficitur, id imperdiet arcu gravida. Cras luctus, eros sed varius luctus, erat urna ullamcorper risus, non scelerisque felis velit luctus sem. Quisque arcu ipsum, vestibulum quis efficitur pretium, hendrerit ac eros. Curabitur at ligula sed mauris pretium euismod. Donec accumsan nisi quis sapien elementum consectetur.`,
    {},
    { header: "Test" }
  );

  blockFull(
    "Fusce interdum blandit ligula, eu ornare tellus convallis ut. Praesent ut elit tempor, luctus urna ac, mattis est. Donec tincidunt sollicitudin eleifend. Donec eu rutrum arcu. Pellentesque lobortis ante libero, vel ultrices mi cursus at"
  );
};

(async () => {
  await show();
  full();
})();
