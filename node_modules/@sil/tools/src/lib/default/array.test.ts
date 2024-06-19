import { repeat } from "./array";

describe("Array", () => {
  it("Should repeat the same value multiple times - string - String", () => {
    expect(repeat(2, "Amsterdam", true)).toEqual("AmsterdamAmsterdam");
  });
  it("Should repeat the same value multiple times - string", () => {
    expect(repeat(2, "Amsterdam")).toEqual(["Amsterdam", "Amsterdam"]);
  });
  it("Should repeat the same value multiple times - number", () => {
    expect(repeat(2, 2)).toEqual([2, 2]);
  });
  it("Should repeat the same value multiple times - array", () => {
    expect(repeat(2, ["Amsterdam"])).toEqual([["Amsterdam"], ["Amsterdam"]]);
  });
  it("Should repeat the same value multiple times - array", () => {
    expect(repeat(2, { city: "Amsterdam" })).toEqual([
      { city: "Amsterdam" },
      { city: "Amsterdam" },
    ]);
  });
});
