export const isNumber = (value) => !Number.isNaN(value);

export const isInteger = (value) => Number.isInteger(value);

export const isInRange = (value, min, max) => value >= min && value <= max;

export const isDuplicate = (values) => new Set(values).size !== values.length;
