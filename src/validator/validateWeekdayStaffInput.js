import { ERROR_MESSAGE } from '../constant/error.js';
import { RULE } from '../constant/rule.js';
import { throwWoowaError } from '../util/error.js';
import { isDuplicate, isInRange } from '../util/validator.js';

export const validateWeekdayStaffInput = (staffNamesInput) => {
  if (
    !isInRange(staffNamesInput.length, RULE.staffCount.min, RULE.staffCount.max)
  )
    throwWoowaError(ERROR_MESSAGE.notInRangeStaffCount);

  if (isDuplicate(staffNamesInput))
    throwWoowaError(ERROR_MESSAGE.duplicateStaffName);

  staffNamesInput.forEach((staffName) => {
    if (!isInRange(staffName.length, RULE.nameLength.min, RULE.nameLength.max))
      throwWoowaError(ERROR_MESSAGE.notInRangeStaffNameLength);
  });
};
