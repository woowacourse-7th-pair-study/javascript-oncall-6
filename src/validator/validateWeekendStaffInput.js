import { throwWoowaError } from '../util/error.js';
import { isDuplicate, isInRange } from '../util/validator.js';

export const validateWeekendStaffInput = (staffNamesInput) => {
  if (isDuplicate(staffNamesInput))
    throwWoowaError('비상 근무자는 휴일 순번에 1회만 편성되어야 한다.');

  staffNamesInput.forEach((staffName) => {
    if (!isInRange(staffName.length, 1, 5))
      throwWoowaError('근무 닉네임이 1자 이상, 5자 이하여야 합니다.');
  });
};
