export const isNumber = (num) => !Number.isNaN(Number(num));

export const isInRange = (num, min, max) => num >= min && num <= max;

export const splitStringAndTrim = (input, separator) =>
  input.split(separator).map((val) => val.trim());

export const isDuplicate = (array) => new Set([...array]).size !== array.length;
