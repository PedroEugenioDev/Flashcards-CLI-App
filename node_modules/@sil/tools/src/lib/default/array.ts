export const repeat = (
  num: number = 1,
  value: any,
  toString = false
): any[] | string => {
  let values = [];
  for (let i = 0; i < num; i++) {
    values.push(value);
  }
  if (toString) return values.join("");
  else return values;
};
