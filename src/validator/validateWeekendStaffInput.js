import { ERROR_MESSAGE } from '../constant/error.js';
import { throwWoowaError } from '../util/error.js';
import {
  isArrayElementSame,
  isDuplicate,
  isInRange,
} from '../util/validator.js';

export const validateWeekendStaffInput = (staffNamesInput, weekdayStaff) => {
  if (isDuplicate(staffNamesInput))
    throwWoowaError(ERROR_MESSAGE.duplicateStaffName);

  staffNamesInput.forEach((staffName) => {
    if (!isInRange(staffName.length, 1, 5))
      throwWoowaError(ERROR_MESSAGE.notInRangeStaffNameLength);
  });

  if (!isArrayElementSame(staffNamesInput, weekdayStaff))
    throwWoowaError(ERROR_MESSAGE.differentStaffList);
};
