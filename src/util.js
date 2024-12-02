export const isNumber = (num) => !Number.isNaN(Number(num));

export const isInRange = (num, min, max) => num >= min && num <= max;
