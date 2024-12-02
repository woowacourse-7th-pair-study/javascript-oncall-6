import { DAYS } from '../constant/days.js';
import { ERROR_MESSAGE } from '../constant/error.js';
import { throwWoowaError } from '../util/error.js';
import { isInRange, isInteger, isNumber } from '../util/validator.js';

export const validateMonthAndDayInput = (input) => {
  if (input.length !== 2) throwWoowaError(ERROR_MESSAGE.invalidInput);

  const month = Number(input[0]);
  if (!isNumber(month)) throwWoowaError(ERROR_MESSAGE.notNumberMonthInput);
  if (!isInteger(month)) throwWoowaError(ERROR_MESSAGE.notIntegerMonthInput);
  if (!isInRange(month, 1, 12))
    throwWoowaError(ERROR_MESSAGE.notInRangeMonthInput);

  const day = input[1];
  if (!DAYS.includes(day)) throwWoowaError(ERROR_MESSAGE.invalidDaysInput);
};
