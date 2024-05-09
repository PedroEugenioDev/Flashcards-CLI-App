export const toRoundNumber = (num: number, decimalPlaces: number = 2) => {
  return Number(
    Math.round(parseFloat(num + "e" + decimalPlaces)) + "e-" + decimalPlaces
  ).toFixed(decimalPlaces);
};
