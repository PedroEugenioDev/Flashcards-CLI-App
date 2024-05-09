"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCssBoolean = exports.isCssColor = exports.isCssNumber = exports.isCssPropertyValue = exports.isCssFunction = void 0;
var data_1 = require("./data/");
var color_1 = require("@sil/color");
var isCssFunction = function (str) {
    return data_1.functions.some(function (v) { return str.includes("".concat(v, "(")) && str.endsWith(")"); });
};
exports.isCssFunction = isCssFunction;
var isCssPropertyValue = function (str) {
    return data_1.propertyValues.includes(str);
};
exports.isCssPropertyValue = isCssPropertyValue;
var isCssNumber = function (str) {
    var isNumber = false;
    if (str == "0")
        isNumber = true;
    if (typeof str == "number")
        isNumber = true;
    if (typeof str == "string")
        if (parseInt(str) > 0 || str.startsWith("0."))
            isNumber = true;
    return isNumber;
};
exports.isCssNumber = isCssNumber;
var isCssColor = function (str) {
    if (typeof str == "number")
        return false;
    return (0, color_1.isHex)(str) || (0, color_1.isRGB)(str) || (0, color_1.isRGBA)(str) || (0, color_1.isHSL)(str) || (0, color_1.isHSLA)(str);
};
exports.isCssColor = isCssColor;
var isCssBoolean = function (str) {
    return str == "true" || str == "false";
};
exports.isCssBoolean = isCssBoolean;
