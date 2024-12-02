export const isNumber = (num) => !Number.isNaN(Number(num));

export const isInRange = (num, min, max) => num >= min && num <= max;

export const splitStringAndTrim = (input, separator) =>
  input.split(separator).map((val) => val.trim());

export const isDuplicate = (array) => new Set([...array]).size !== array.length;

export const getDayOffString = (isDayOff, dayOfWeek) => {
  if (isDayOff && dayOfWeek !== '토' && dayOfWeek !== '일') return '(휴일)';
  return '';
};
