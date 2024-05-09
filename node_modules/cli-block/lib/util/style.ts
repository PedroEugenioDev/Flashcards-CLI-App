import { COLOR, toRGB } from "@sil/color";

export {
  red,
  blue,
  green,
  italic,
  yellow,
  bold,
  dim,
  magenta,
  black,
  white,
  gray,
} from "kleur";

export const color = (str: string, color: COLOR) => {
  const c = toRGB(color);
  return `\x1B[38;2;${c.r};${c.g};${c.b}m${str}\x1B[39m`;
};
