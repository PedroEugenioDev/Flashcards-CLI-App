import {
  isCssPropertyValue,
  isCssFunction,
  isCssColor,
  isCssBoolean,
} from "./is";

const valueOptions: { input: string; output: boolean }[] = [
  {
    input: "lowercase",
    output: true,
  },
  {
    input: "uppercase",
    output: true,
  },
  {
    input: "UPPERCASE",
    output: false,
  },
  {
    input: "capitalize",
    output: true,
  },
  {
    input: "something",
    output: false,
  },
  {
    input: "else",
    output: false,
  },
];

describe("CSS Value", () => {
  Object.keys(valueOptions).forEach((_v, key) => {
    const value = valueOptions[key];
    it(`Should check if it's a property value - ${value.input} -> ${value.output}`, () => {
      expect(isCssPropertyValue(value.input)).toBe(value.output);
    });
  });
});

const functionOptions: { input: string; output: boolean }[] = [
  {
    input: "calc(1*2)",
    output: true,
  },
  {
    input: "calc(1*2",
    output: false,
  },
  {
    input: "some(1*2)",
    output: false,
  },
  {
    input: "var(134324324324*2)",
    output: true,
  },
];

describe("CSS Function", () => {
  Object.keys(functionOptions).forEach((_v, key) => {
    const value = functionOptions[key];
    it(`Should check if it's a function - ${value.input} -> ${value.output}`, () => {
      expect(isCssFunction(value.input)).toBe(value.output);
    });
  });
});

const colorOptions: { input: string; output: boolean }[] = [
  { input: "#ff0000", output: true },
  { input: "#ff00000", output: false },
  { input: "red(232)", output: false },
  { input: "rgb(2,5,5)", output: true },
  { input: "rgb(2,5,5,0)", output: false },
  { input: "rgba(2,5,5,0)", output: true },
  { input: "rgb(2,5,5,0,2)", output: false },
  { input: "rgb(5,5)", output: false },
];

describe("CSS Color", () => {
  Object.keys(colorOptions).forEach((_v, key) => {
    const value = colorOptions[key];
    it(`Should check if it's a color - ${value.input} -> ${value.output}`, () => {
      expect(isCssColor(value.input)).toBe(value.output);
    });
  });
});
const booleanOptions: { input: string; output: boolean }[] = [
  { input: "true", output: true },
  { input: "false", output: true },
  { input: "TRUE", output: false },
  { input: "fals", output: false },
];

describe("CSS Boolean", () => {
  Object.keys(booleanOptions).forEach((_v, key) => {
    const value = booleanOptions[key];
    it(`Should check if it's a boolean - ${value.input} -> ${value.output}`, () => {
      expect(isCssBoolean(value.input)).toBe(value.output);
    });
  });
});
