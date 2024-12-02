import { throwWoowaError } from '../util/error.js';
import {
  isArrayElementSame,
  isDuplicate,
  isInRange,
} from '../util/validator.js';

export const validateWeekendStaffInput = (staffNamesInput, weekdayStaff) => {
  if (isDuplicate(staffNamesInput))
    throwWoowaError('비상 근무자는 휴일 순번에 1회만 편성되어야 한다.');

  if (!isArrayElementSame(staffNamesInput, weekdayStaff))
    throwWoowaError('비상 근무자는 평일과 휴일이 다르면 안됩니다.');

  staffNamesInput.forEach((staffName) => {
    if (!isInRange(staffName.length, 1, 5))
      throwWoowaError('근무 닉네임이 1자 이상, 5자 이하여야 합니다.');
  });
};
