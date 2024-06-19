"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("./is");
var valueOptions = [
    {
        input: "lowercase",
        output: true,
    },
    {
        input: "uppercase",
        output: true,
    },
    {
        input: "UPPERCASE",
        output: false,
    },
    {
        input: "capitalize",
        output: true,
    },
    {
        input: "something",
        output: false,
    },
    {
        input: "else",
        output: false,
    },
];
describe("CSS Value", function () {
    Object.keys(valueOptions).forEach(function (_v, key) {
        var value = valueOptions[key];
        it("Should check if it's a property value - ".concat(value.input, " -> ").concat(value.output), function () {
            expect((0, is_1.isCssPropertyValue)(value.input)).toBe(value.output);
        });
    });
});
var functionOptions = [
    {
        input: "calc(1*2)",
        output: true,
    },
    {
        input: "calc(1*2",
        output: false,
    },
    {
        input: "some(1*2)",
        output: false,
    },
    {
        input: "var(134324324324*2)",
        output: true,
    },
];
describe("CSS Function", function () {
    Object.keys(functionOptions).forEach(function (_v, key) {
        var value = functionOptions[key];
        it("Should check if it's a function - ".concat(value.input, " -> ").concat(value.output), function () {
            expect((0, is_1.isCssFunction)(value.input)).toBe(value.output);
        });
    });
});
var colorOptions = [
    { input: "#ff0000", output: true },
    { input: "#ff00000", output: false },
    { input: "red(232)", output: false },
    { input: "rgb(2,5,5)", output: true },
    { input: "rgb(2,5,5,0)", output: false },
    { input: "rgba(2,5,5,0)", output: true },
    { input: "rgb(2,5,5,0,2)", output: false },
    { input: "rgb(5,5)", output: false },
];
describe("CSS Color", function () {
    Object.keys(colorOptions).forEach(function (_v, key) {
        var value = colorOptions[key];
        it("Should check if it's a color - ".concat(value.input, " -> ").concat(value.output), function () {
            expect((0, is_1.isCssColor)(value.input)).toBe(value.output);
        });
    });
});
var booleanOptions = [
    { input: "true", output: true },
    { input: "false", output: true },
    { input: "TRUE", output: false },
    { input: "fals", output: false },
];
describe("CSS Boolean", function () {
    Object.keys(booleanOptions).forEach(function (_v, key) {
        var value = booleanOptions[key];
        it("Should check if it's a boolean - ".concat(value.input, " -> ").concat(value.output), function () {
            expect((0, is_1.isCssBoolean)(value.input)).toBe(value.output);
        });
    });
});
