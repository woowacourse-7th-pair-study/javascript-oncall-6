import { throwWoowaError } from '../util/error.js';
import { isDuplicate, isInRange } from '../util/validator.js';

export const validateWeekdayStaffInput = (staffNamesInput) => {
  if (!isInRange(staffNamesInput.length, 5, 35))
    throwWoowaError('근무 인원수가 5보다 작고, 35보다 크면 안됩니다.');

  if (isDuplicate(staffNamesInput))
    throwWoowaError('비상 근무자는 평일 순번에 1회만 편성되어야 한다.');

  staffNamesInput.forEach((staffName) => {
    if (!isInRange(staffName.length, 1, 5))
      throwWoowaError('근무 닉네임이 1자 이상, 5자 이하여야 합니다.');
  });
};
