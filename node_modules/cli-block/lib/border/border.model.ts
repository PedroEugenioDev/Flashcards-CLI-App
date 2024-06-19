export enum BorderType {
  single = "single",
  double = "double",
  fat = "fat",
}

export enum BorderColor {
  dim = "dim",
  red = "red",
  yellow = "yellow",
  green = "green",
  blue = "blue",
  magenta = "magenta",
  black = "black",
  white = "white",
  gray = "gray",
}

export enum BorderElement {
  startLine = "startLine",
  endLine = "endLine",
  midLine = "midLine",
  midBreakTop = "midBreakTop",
  midBreakBottom = "midBreakBottom",
  side = "side",
  topStart = "topStart",
  topEnd = "topEnd",
  bottomStart = "bottomStart",
  bottomEnd = "bottomEnd",
  midStart = "midStart",
  midEnd = "midEnd",
}

export type BorderElements = {
  [key in keyof typeof BorderElement]: string;
};

export type BorderCharacters = {
  [key in keyof typeof BorderType]: BorderElements;
};
