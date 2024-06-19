export class Style {
  block: string = "";

  constructor(block: string) {
    this.block = block;
  }
  bem(element: string = "", modifier: string = "") {
    if (this.block == "") {
      return ``;
    }
    return `${this.block}${element ? `__${element}` : ``}${
      modifier ? `--${modifier}` : ``
    }`;
  }
}
