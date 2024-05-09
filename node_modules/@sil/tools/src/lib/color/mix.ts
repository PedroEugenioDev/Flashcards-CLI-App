import { RGB, Hex, HSL } from "./color.model";
import { hexToHsl, hexToRgb, rgbToHex, hslToHex } from "./convert";

export const mixHex = (colorA: Hex, colorB: Hex, amount: number): string => {
  const colorA_array = colorA.match(/\w\w/g);
  const colorB_array = colorB.match(/\w\w/g);

  if (colorA_array == null || colorB_array == null) return "#000000";

  const [rA, gA, bA] = colorA_array.map((c) => parseInt(c, 16));
  const [rB, gB, bB] = colorB_array.map((c) => parseInt(c, 16));

  const rgb: RGB = {
    red: 0,
    green: 0,
    blue: 0,
  };

  rgb.red = Math.round(rA + (rB - rA) * amount);
  rgb.green = Math.round(gA + (gB - gA) * amount);
  rgb.blue = Math.round(bA + (bB - bA) * amount);

  return rgbToHex(rgb);
};
export const mixRGB = (colorA: RGB, colorB: RGB, amount: number): RGB => {
  return hexToRgb(mixHex(rgbToHex(colorA), rgbToHex(colorB), amount));
};

export const mixHSL = (colorA: HSL, colorB: HSL, amount: number): HSL => {
  return hexToHsl(mixHex(hslToHex(colorA), hslToHex(colorB), amount));
};
