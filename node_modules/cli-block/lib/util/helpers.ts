// Logging Helpers
import stringWidth from "mono-str-width";
import { toRoundNumber } from "@sil/tools";

export const strWidth = stringWidth;

import { red, blue, green, italic, yellow, color } from "../util";
import { COLOR, isCOLOR, toHex } from "@sil/color";

export const objectToString = (obj: any) => {
  let str = "";
  Object.keys(obj).forEach((item) => {
    let value = obj[item];
    if (typeof value == "number") value = toRoundNumber(value, 0);
    str = str + `${blue(item)}${value} `;
  });
  return str;
};

export const toStringValue = (value: any) => {
  if (typeof value == "string") return value;
  else if (typeof value == "number") return `${value}`;
  else if (typeof value == "boolean") return `${value ? "true" : "false"}`;
  else if (value == null) return "";
  else if (typeof value == "object") return objectToString(value);
  else return value.join("");
};

export const spaces = (num: number, value = null) => {
  let width = value;

  if (typeof value !== "number") width = stringWidth(toStringValue(value));

  let spaces = [];
  for (let i = 0; i < (value ? num - width : num); i++) {
    spaces.push(" ");
  }
  return spaces.join("");
};

export const spacedText = (num: number, value: string) => {
  return `${value} ${spaces(num, stringWidth(toStringValue(value)) + 1)}`;
};

const ValueType = {
  STRING: "string",
  NUMBER: "number",
  COLOR: "color",
  ARRAY: "array",
  OBJECT: "object",
  BOOLEAN: "boolean",
  PATH: "path",
  UNDEFINED: "undefined",
  NULL: "null",
};
type ValueType = (typeof ValueType)[keyof typeof ValueType];

export const isUndefined = (value: any) =>
  (!value || value == undefined || value == null) && value !== 0;
export const isString = (value: any) => typeof value == "string";

export const isNumber = (value: any) =>
  typeof value == "number" &&
  (value == 0 || ((!isString(value) || !isArray(value)) && !isNaN(value)));

export const isNumeric = (value: any) =>
  isNumber(value) || `${value}` === `${parseFloat(value)}`;
export const isArray = (value: any) =>
  Array.isArray(value) && value instanceof Array;
export const isObject = (value: any) =>
  typeof value == "object" && !isArray(value) && !isUndefined(value);
export const isColor = (value: any) => isCOLOR(value);
export const isBoolean = (value: any) => typeof value == "boolean";
export const isBooleanish = (value: any) =>
  isBoolean(value) ||
  (isString(value) &&
    (value.toLowerCase() === "true" || value.toLowerCase() === "false"));
export const isNull = (value: any) =>
  (value == null || value == "null") && value !== undefined && value !== "";
export const isPath = (value: any) => isString(value) && value.includes("/");
export const isTrue = (value: any) => {
  if (isBoolean(value)) return !!value;
  if (isBooleanish(value) && value.toLowerCase() == "true") return true;
  return false;
};

export const defineValueType = (value: any): ValueType => {
  if (isNull(value)) return ValueType.NULL;

  if (isUndefined(value)) return ValueType.UNDEFINED;

  if (isNumeric(value)) return ValueType.NUMBER;

  if (isArray(value)) return ValueType.ARRAY;

  if (isObject(value)) return ValueType.OBJECT;

  if (isBooleanish(value)) return ValueType.BOOLEAN;

  if (isPath(value)) return ValueType.PATH;

  if (isColor(value)) return ValueType.COLOR;

  if (isString(value)) return ValueType.STRING;
};

export const stylizeValue = (value: any) => {
  switch (defineValueType(value)) {
    case ValueType.NULL:
      return `${italic("null")}`;

    case ValueType.UNDEFINED:
      return ``;

    case ValueType.ARRAY:
      return value.join(", ");

    case ValueType.OBJECT:
      return Object.keys(value).join(", ");

    case ValueType.NUMBER:
      return `${yellow(value)}`;

    case ValueType.BOOLEAN:
      return isTrue(value) ? `${green("True")}` : `${red("False")}`;

    case ValueType.PATH:
      return `${blue().italic(value)}`;

    case ValueType.COLOR:
      return `${color(`▶`, toHex(value as COLOR))} ${value}`;

    default:
    case ValueType.STRING:
      return value;
  }
};

export const centerText = (value: string, num: number) => {
  let values = [];
  let isEven = stringWidth(value) % 2 == 0 ? true : false;
  num = (num - stringWidth(value)) / 2;
  for (let i = 0; i < num; i++) values.push(" ");
  values.push(value);
  for (let i = 0; i < num - (isEven ? 0 : 1); i++) values.push(" ");

  return values.join("");
};

export const truncateText = (value: string, width: number, affix:string= "") => {
  if (typeof value !== "string") return value;

  if (stringWidth(value) > width) {
    let valueArray = value.split("");
    return valueArray.slice(0, width - affix.length).join("") + affix;
  } else return value;
};

export const breakText = (value: string, width: number) => {
  if (typeof value !== "string") return value;

  let sentences = [];

  if (stringWidth(value) > width) {
    let words = value.split(" ");
    let sentence = "";
    words.forEach((word, i) => {
      if (stringWidth(sentence + " " + word) < width) {
        sentence = sentence + " " + word;
      } else {
        sentences.push(sentence);
        sentence = word;
      }
    });
    return sentences;
  } else return [value];
};
