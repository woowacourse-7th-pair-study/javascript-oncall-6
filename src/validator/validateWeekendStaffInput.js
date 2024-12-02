import { ERROR_MESSAGE } from '../constant/error.js';
import { RULE } from '../constant/rule.js';
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
    if (!isInRange(staffName.length, RULE.nameLength.min, RULE.nameLength.max))
      throwWoowaError(ERROR_MESSAGE.notInRangeStaffNameLength);
  });

  if (!isArrayElementSame(staffNamesInput, weekdayStaff))
    throwWoowaError(ERROR_MESSAGE.differentStaffList);
};
