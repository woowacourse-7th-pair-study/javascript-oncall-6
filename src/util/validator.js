import { DAYS } from '../constant/days.js';
import { HOLIDAY } from '../constant/holiday.js';

export const isNumber = (value) => !Number.isNaN(value);

export const isInteger = (value) => Number.isInteger(value);

export const isInRange = (value, min, max) => value >= min && value <= max;

export const isDuplicate = (values) => new Set(values).size !== values.length;

export const isArrayElementSame = (array1, array2) => {
  const sortedArray1 = [...array1].sort();
  const sortedArray2 = [...array2].sort();

  return sortedArray1.toString() === sortedArray2.toString();
};

export const isWeekend = (days) => {
  const daysIndex = DAYS.indexOf(days);

  return daysIndex === 6 || daysIndex === 0;
};

export const isHoliday = (month, day) =>
  HOLIDAY.some(
    ({ month: holidayMonth, day: holidayDay }) =>
      holidayMonth === month && holidayDay === day,
  );
