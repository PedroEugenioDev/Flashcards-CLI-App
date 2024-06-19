import { Hex, HSL, RGB } from "./color.model";

export const hexToRgb = (hex: string): RGB => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        red: parseInt(result[1], 16),
        green: parseInt(result[2], 16),
        blue: parseInt(result[3], 16),
      }
    : {
        red: 0,
        green: 0,
        blue: 0,
      };
};

export const componentToHex = (c: number): Hex => {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};

export const rgbToHex = (rgb: RGB): Hex => {
  const cth = componentToHex;
  return `#${cth(rgb.red)}${cth(rgb.green)}${cth(rgb.blue)}`;
};

export const hexToHsl = (hex: Hex): HSL => {
  return rgbToHsl(hexToRgb(hex));
};

export const RgbToLuminance = (rgb: RGB): number => {
  return 0.299 * rgb.red + 0.587 * rgb.green + 0.114 * rgb.blue;
};
export const HexToLuminance = (hex: Hex): number =>
  RgbToLuminance(hexToRgb(hex));

export const hslToHex = (hsl: HSL): Hex => {
  hsl.lightness /= 100;
  const a = (hsl.saturation * Math.min(hsl.lightness, 1 - hsl.lightness)) / 100;
  const f = (n: number) => {
    const k = (n + hsl.hue / 30) % 12;
    const color = hsl.lightness - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};

export const rgbToHsl = (rgb: RGB): HSL => {
  (rgb.red /= 255), (rgb.green /= 255), (rgb.blue /= 255);
  const max = Math.max(rgb.red, rgb.green, rgb.blue);
  const min = Math.min(rgb.red, rgb.green, rgb.blue);

  let hue;
  let sat;
  let light = (max + min) / 2;

  if (max == min) {
    hue = sat = 0; // achromatic
  } else {
    var d = max - min;
    sat = light > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case rgb.red:
        hue = (rgb.green - rgb.blue) / d + (rgb.green < rgb.blue ? 6 : 0);
        break;
      case rgb.green:
        hue = (rgb.blue - rgb.red) / d + 2;
        break;
      case rgb.blue:
        hue = (rgb.red - rgb.green) / d + 4;
        break;
    }
    if (hue) hue /= 6;
  }

  return { hue: hue || 0, saturation: sat, lightness: light };
};
