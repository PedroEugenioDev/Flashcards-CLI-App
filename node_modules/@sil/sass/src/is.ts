import { propertyValues, functions } from "./data/";
import { isHex, isHSL, isHSLA, isRGB, isRGBA } from "@sil/color";

export const isCssFunction = (str: string): boolean =>
  functions.some((v) => str.includes(`${v}(`) && str.endsWith(")"));

export const isCssPropertyValue = (str: string): boolean =>
  propertyValues.includes(str);

export const isCssNumber = (str: string | number): boolean => {
  let isNumber = false;
  if (str == "0") isNumber = true;
  if (typeof str == "number") isNumber = true;
  if (typeof str == "string")
    if (parseInt(str) > 0 || str.startsWith("0.")) isNumber = true;

  return isNumber;
};

export const isCssColor = (str: string | number): boolean => {
  if (typeof str == "number") return false;
  return isHex(str) || isRGB(str) || isRGBA(str) || isHSL(str) || isHSLA(str);
};

export const isCssBoolean = (str: string): boolean =>
  str == "true" || str == "false";