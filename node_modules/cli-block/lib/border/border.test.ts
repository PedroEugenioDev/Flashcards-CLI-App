import { border } from "./border";
import { BorderColor, BorderElement } from "./border.model";

import { dim, red } from "../util";

describe("Default borders", () => {
  // Assert
  // let settings = { borderColor: "yellow" };
  let settings = {};

  it("should render a midLine, without color", () => {
    expect(border(BorderElement.midLine, settings)).toBe(dim("─"));
  });
  it("should render a startLine, without color", () => {
    expect(border(BorderElement.startLine, settings)).toBe(dim("━"));
  });
  it("should render a endLine, without color", () => {
    expect(border(BorderElement.endLine, settings)).toBe(dim("━"));
  });
});

describe("Default borders - without settings", () => {
  it("should render a midline, without color", () => {
    expect(border(BorderElement.midLine)).toBe(dim("─"));
  });
  it("should render a startLine, without color", () => {
    expect(border(BorderElement.startLine)).toBe(dim("━"));
  });
  it("should render a endLine, without color", () => {
    expect(border(BorderElement.endLine)).toBe(dim("━"));
  });
});
describe("Red borders", () => {
  let settings = {
    borderColor: BorderColor.red,
  };
  it("should render a midline, red", () => {
    expect(border(BorderElement.midLine, settings)).toBe(red("─"));
  });
  it("should render a startLine, red", () => {
    expect(border(BorderElement.startLine, settings)).toBe(red("━"));
  });
  it("should render a endLine, red", () => {
    expect(border(BorderElement.endLine, settings)).toBe(red("━"));
  });
});
