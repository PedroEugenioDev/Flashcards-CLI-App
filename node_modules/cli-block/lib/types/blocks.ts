export interface CounterOptions {
  message?: string;
  messages?: string[];
  increment?: number;
  start?: number;
  end?: number;
  interval?: number;
}

export interface LoaderOptions {
  message?: string;
  increment?: number;
  start?: number;
  step?: number;
  end?: number;
  interval?: number;
  width?: string | number;
  charFilled?: string;
  charUnfilled?: string;
  newLine?: boolean;
  clear?: boolean;
}
