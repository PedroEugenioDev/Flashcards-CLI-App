import { toSassValue, toSassObject, toSassVariables } from "./convert";

const sassValues: { input: any; output: string }[] = [
  { input: "rgba()", output: '"rgba()"' },
  { input: "rgba(0,0,0,0)", output: "rgba(0,0,0,0)" },
  { input: "#ffffff", output: "#ffffff" },
  { input: "true", output: "true" },
  { input: true, output: "true" },
  { input: "false", output: "false" },
  { input: false, output: "false" },
  { input: "ugh", output: '"ugh"' },
];

describe("SassValue", () => {
  Object.keys(sassValues).forEach((_v, key) => {
    it("should convert to a Sass value", () => {
      expect(toSassValue(sassValues[key].input)).toBe(sassValues[key].output);
    });
  });
});

describe("SassObject", () => {
  it("Should convert to a Sass Object", () => {
    const input = {
      SomethingGoingOn: true,
      myValue: [1, 3, 5, "string"],
      left: "left",
      right: "center",
      position: "absolute",
      content: "something"
    };

    const output = `"SomethingGoingOn": true,
"myValue": (1, 3, 5, string),
"left": left,
"right": center,
"position": absolute,
"content": "something"`;

    expect(toSassObject(input)).toBe(output);
  });
});

describe("SassVariables", () => {
  it("Should convert to a Sass Variables", () => {
    const input = {
      SomethingGoingOn: true,
      myValue: [1, 3, 5, "string"],
      left: "left",
      right: "center",
      position: "absolute",
      content: "something"
    };

    const output = `$SomethingGoingOn: true;
$myValue: (1, 3, 5, string);
$left: left;
$right: center;
$position: absolute;
$content: "something";`;

    expect(toSassVariables(input)).toBe(output);
  });
});
