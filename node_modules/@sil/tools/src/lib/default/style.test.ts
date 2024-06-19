import { Style } from "./style";

describe("Style", () => {
  it("Should respond with the default class", () => {
    const style = new Style("block");
    expect(style.bem()).toEqual("block");
  });
  it("Should respond with the default class with element", () => {
    const style = new Style("block");
    expect(style.bem("element")).toEqual("block__element");
  });
  it("Should respond with the default class with modifier", () => {
    const style = new Style("block");
    expect(style.bem("element", "dark")).toEqual("block__element--dark");
  });
  it("Should respond with the default class with only modifier", () => {
    const style = new Style("block");
    expect(style.bem("", "dark")).toEqual("block--dark");
  });
  it("Should respond with nothing", () => {
    const style = new Style("");
    expect(style.bem()).toEqual("");
  });
  it("Should respond with not block as a class", () => {
    const style = new Style("");
    expect(style.bem("test")).toEqual("");
  });
});
