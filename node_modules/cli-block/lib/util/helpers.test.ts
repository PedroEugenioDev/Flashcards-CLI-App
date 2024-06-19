import {
  breakText,
  centerText,
  isUndefined,
  isNull,
  isString,
  isNumber,
  isNumeric,
  isObject,
  isArray,
  isBoolean,
  isBooleanish,
  isPath,
  isColor,
  truncateText,
} from "./helpers";

test("breakText", () => {
  const input =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non euismod elit. Duis sed est at tortor interdum molestie. Nullam auctor pellentesque metus in viverra. Sed diam massa, egestas non congue in, tempor ac nisl. ";
  const expected25 = [
    " Lorem ipsum dolor sit",
    "amet, consectetur",
    "adipiscing elit. Morbi",
    "non euismod elit. Duis",
    "sed est at tortor",
    "interdum molestie.",
    "Nullam auctor",
    "pellentesque metus in",
    "viverra. Sed diam massa,",
    "egestas non congue in,",
  ];
  const expected50 = [
    " Lorem ipsum dolor sit amet, consectetur",
    "adipiscing elit. Morbi non euismod elit. Duis sed",
    "est at tortor interdum molestie. Nullam auctor",
    "pellentesque metus in viverra. Sed diam massa,",
  ];
  const expected75 = [
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non",
    "euismod elit. Duis sed est at tortor interdum molestie. Nullam auctor",
    "pellentesque metus in viverra. Sed diam massa, egestas non congue in,",
  ];
  const expected100 = [
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non euismod elit. Duis sed est at",
    "tortor interdum molestie. Nullam auctor pellentesque metus in viverra. Sed diam massa, egestas non",
  ];
  expect(breakText(input, 25)).toStrictEqual(expected25);
  expect(breakText(input, 50)).toStrictEqual(expected50);
  expect(breakText(input, 75)).toStrictEqual(expected75);
  expect(breakText(input, 100)).toStrictEqual(expected100);
});

test("centerText", () => {
  const input = "Lorem ipsum dolor sit amet";
  const expected25 = "Lorem ipsum dolor sit amet";
  const expected50 = "            Lorem ipsum dolor sit amet            ";
  const expected75 =
    "                         Lorem ipsum dolor sit amet                         ";
  const expected100 =
    "                                     Lorem ipsum dolor sit amet                                     ";
  expect(centerText(input, 25)).toStrictEqual(expected25);
  expect(centerText(input, 50)).toStrictEqual(expected50);
  expect(centerText(input, 75)).toStrictEqual(expected75);
  expect(centerText(input, 100)).toStrictEqual(expected100);
});

describe("isFunctions", () => {
  it("Should return if is undefined", () => {
    expect(isUndefined("")).toBe(true);
    expect(isUndefined(null)).toBe(true);
    expect(isUndefined(undefined)).toBe(true);
    expect(isUndefined(0)).toBe(false);
    expect(isUndefined("0")).toBe(false);
    expect(isUndefined("a")).toBe(false);
    expect(isUndefined("#000000")).toBe(false);
    expect(isUndefined(1)).toBe(false);
    expect(isUndefined("343434333.534343")).toBe(false);
    expect(isUndefined([])).toBe(false);
    expect(isUndefined({})).toBe(false);
    expect(isUndefined([{}])).toBe(false);
    expect(isUndefined({ test: "test" })).toBe(false);
  });
  it("Should return if is null", () => {
    expect(isNull("")).toBe(false);
    expect(isNull(null)).toBe(true);
    expect(isNull(undefined)).toBe(false);
    expect(isNull(0)).toBe(false);
    expect(isNull("a")).toBe(false);
    expect(isNull("#000000")).toBe(false);
    expect(isNull(1)).toBe(false);
    expect(isNull([])).toBe(false);
  });
  it("Should return if is string", () => {
    expect(isString("")).toBe(true);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString(0)).toBe(false);
    expect(isString("a")).toBe(true);
    expect(isString("#000000")).toBe(true);
    expect(isString(1)).toBe(false);
    expect(isString([])).toBe(false);
  });
  it("Should return if is number", () => {
    expect(isNumber("")).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber(0)).toBe(true);
    expect(isNumber("a")).toBe(false);
    expect(isNumber("#000000")).toBe(false);
    expect(isNumber(1)).toBe(true);
    expect(isNumber([])).toBe(false);
  });
  it("Should return if is numeric", () => {
    expect(isNumeric("")).toBe(false);
    expect(isNumeric(null)).toBe(false);
    expect(isNumeric(undefined)).toBe(false);
    expect(isNumeric(0)).toBe(true);
    expect(isNumeric("0")).toBe(true);
    expect(isNumeric("a")).toBe(false);
    expect(isNumeric("#000000")).toBe(false);
    expect(isNumeric(1)).toBe(true);
    expect(isNumeric("343434333.534343")).toBe(true);
    expect(isNumeric([])).toBe(false);
  });
  it("Should return if is Object", () => {
    expect(isObject("")).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject(0)).toBe(false);
    expect(isObject("0")).toBe(false);
    expect(isObject("a")).toBe(false);
    expect(isObject("#000000")).toBe(false);
    expect(isObject(1)).toBe(false);
    expect(isObject("343434333.534343")).toBe(false);
    expect(isObject([])).toBe(false);
    expect(isObject({})).toBe(true);
    expect(isObject([{}])).toBe(false);
    expect(isObject({ test: "test" })).toBe(true);
  });
  it("Should return if is Array", () => {
    expect(isArray("")).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray(0)).toBe(false);
    expect(isArray("0")).toBe(false);
    expect(isArray("a")).toBe(false);
    expect(isArray("#000000")).toBe(false);
    expect(isArray(1)).toBe(false);
    expect(isArray("343434333.534343")).toBe(false);
    expect(isArray([])).toBe(true);
    expect(isArray({})).toBe(false);
    expect(isArray([{}])).toBe(true);
    expect(isArray({ test: "test" })).toBe(false);
  });
  it("Should return if is Boolean", () => {
    expect(isBoolean("")).toBe(false);
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean("true")).toBe(false);
    expect(isBoolean("false")).toBe(false);
    expect(isBoolean("True")).toBe(false);
    expect(isBoolean("Talse")).toBe(false);
    expect(isBoolean("0")).toBe(false);
    expect(isBoolean("a")).toBe(false);
    expect(isBoolean("#000000")).toBe(false);
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean("343434333.534343")).toBe(false);
    expect(isBoolean([])).toBe(false);
    expect(isBoolean({})).toBe(false);
    expect(isBoolean([{}])).toBe(false);
    expect(isBoolean({ test: "test" })).toBe(false);
  });
  it("Should return if is Booleanish", () => {
    expect(isBooleanish("")).toBe(false);
    expect(isBooleanish(null)).toBe(false);
    expect(isBooleanish(undefined)).toBe(false);
    expect(isBooleanish(0)).toBe(false);
    expect(isBooleanish(false)).toBe(true);
    expect(isBooleanish(true)).toBe(true);
    expect(isBooleanish("true")).toBe(true);
    expect(isBooleanish("false")).toBe(true);
    expect(isBooleanish("True")).toBe(true);
    expect(isBooleanish("False")).toBe(true);
    expect(isBooleanish("0")).toBe(false);
    expect(isBooleanish("a")).toBe(false);
    expect(isBooleanish("#000000")).toBe(false);
    expect(isBooleanish(1)).toBe(false);
    expect(isBooleanish("343434333.534343")).toBe(false);
    expect(isBooleanish([])).toBe(false);
    expect(isBooleanish({})).toBe(false);
    expect(isBooleanish([{}])).toBe(false);
    expect(isBooleanish({ test: "test" })).toBe(false);
  });
  it("Should return if is Path", () => {
    expect(isPath("test/test")).toBe(true);
    expect(isPath("/")).toBe(true);
    expect(isPath("something")).toBe(false);
    expect(isPath("/something")).toBe(true);
  });
  it("Should return if is Color", () => {
    expect(isColor("#000000")).toBe(true);
    expect(isColor("000000")).toBe(false);
    expect(isColor("rgba(0,0,0,0)")).toBe(true);
    expect(isColor("hsla(0,0,0,0)")).toBe(true);
    expect(isColor("rgb(0,0,0)")).toBe(true);
    expect(isColor("rgb(0,0,0,0)")).toBe(false);
  });
});

// export const truncateText = (value: string, width: number) => {
//   if (typeof value !== "string") return value;

//   if (stringWidth(value) > width) {
//     let words = value.split(" ");
//     let sentence = "";
//     words.forEach((word, i) => {
//       if (stringWidth(sentence + " " + word) < width) {
//         sentence = sentence + " " + word;
//       }
//     });
//     return sentence;
//   } else return value;
// }

describe("truncateText", () => {
  it("Should return the same string if it is shorter than the width", () => {
    expect(truncateText("test", 10)).toBe("test");
  });
  it("Should return the same string if it is equal to the width", () => {
    expect(truncateText("test", 4)).toBe("test");
  });
  it("Should return a truncated string when it is longer than the width", () => {
    expect(truncateText("test1 test2 test3", 10)).toBe("test1 test");
  });
  it("Should return a truncated string when it is longer than the width, with affix", () => {
    expect(truncateText("test1 test2 test3", 10, "...")).toBe("test1 t...");
  });
});
