import { ERROR_MESSAGE } from '../constant/error.js';
import { throwWoowaError } from '../util/error.js';
import { isDuplicate, isInRange } from '../util/validator.js';

export const validateWeekdayStaffInput = (staffNamesInput) => {
  if (!isInRange(staffNamesInput.length, 5, 35))
    throwWoowaError(ERROR_MESSAGE.notInRangeStaffCount);

  if (isDuplicate(staffNamesInput))
    throwWoowaError(ERROR_MESSAGE.duplicateStaffName);

  staffNamesInput.forEach((staffName) => {
    if (!isInRange(staffName.length, 1, 5))
      throwWoowaError(ERROR_MESSAGE.notInRangeStaffNameLength);
  });
};
