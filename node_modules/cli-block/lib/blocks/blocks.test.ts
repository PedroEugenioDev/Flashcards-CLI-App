import { dim, green } from "../util";

import {
  blockHeader,
  blockLine,
  createBlockLineSuccess,
  blockLineSuccess,
  block,
  createBlock,
  createBlockHeader,
  createBlockLine,
} from "./";
import { BlockType } from "./blocks.model";

const stdOutSpy = jest.spyOn(process.stdout, "write").mockImplementation();

describe("BlockLine", () => {
  beforeEach(() => {
    stdOutSpy.mockClear();
  });

  it("Should Render", () => {
    const expected = `     ${dim(
      "┃"
    )}                                                                                ${dim(
      "┃"
    )}`;

    expect(createBlockLine()).toEqual([expected]);
  });

  it("Should Log", () => {
    process.stdout.write = jest.fn();
    const expected = `     ${dim(
      "┃"
    )}                                                                                ${dim(
      "┃"
    )}\n`;

    blockLine();

    expect(process.stdout.write).toHaveBeenCalledWith(expected);
  });
});

describe("BlockLine - With text", () => {
  beforeEach(() => {
    stdOutSpy.mockClear();
  });

  it("Should Render", () => {
    const expected = `     ${dim(
      "┃"
    )}        test                                                                    ${dim(
      "┃"
    )}`;

    expect(createBlockLine("test")).toEqual([expected]);
  });

  it("Should Log", () => {
    // const consoleSpy = jest.spyOn(console, "log");
    process.stdout.write = jest.fn();
    const expected = `     ${dim(
      "┃"
    )}        test                                                                    ${dim(
      "┃"
    )}\n`;

    blockLine("test");

    expect(process.stdout.write).toHaveBeenCalledWith(expected);
  });
});

describe("Block Start", () => {
  beforeEach(() => {
    stdOutSpy.mockClear();
  });

  it("Should Render", () => {
    const expected = [
      "     \u001b[2m┏\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m┓\u001b[22m",
    ];
    expect(createBlockHeader()).toEqual(expected);
  });

  it("Should Log", () => {
    const expected =
      "     \u001b[2m┏\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m┓\u001b[22m\n";

    blockHeader();

    expect(process.stdout.write).toHaveBeenCalledWith(expected);
  });
});

describe("Block Line Types", () => {
  beforeEach(() => {
    stdOutSpy.mockClear();
  });

  it("Should Render - Success", () => {
    const expected = [
      `     ${dim("┃")}        ${green(
        "✔"
      )} My Victory                                                            ${dim(
        "┃"
      )}`,
    ];
    expect(createBlockLineSuccess("My Victory")).toEqual(expected);
  });

  it("Should Log - Success", () => {
    const expected = `     ${dim("┃")}        ${green(
      "✔"
    )} My Victory                                                            ${dim(
      "┃"
    )}\n`;

    blockLineSuccess("My Victory");

    expect(process.stdout.write).toHaveBeenCalledWith(expected);
  });
});

describe("Blocks", () => {
  beforeEach(() => {
    stdOutSpy.mockClear();
  });

  it("Should Render - Block Line", async () => {
    const expected = `     ${dim(
      "┃"
    )}        test                                                                    ${dim(
      "┃"
    )}`;

    const result = await createBlock(BlockType.LINE, "test");

    expect(result).toEqual([expected]);
  });

  it("Should Log - Block Line", () => {
    const expected = `     ${dim(
      "┃"
    )}        test                                                                    ${dim(
      "┃"
    )}\n`;

    block(BlockType.LINE, "test");

    expect(process.stdout.write).toHaveBeenCalledWith(expected);
  });
});
