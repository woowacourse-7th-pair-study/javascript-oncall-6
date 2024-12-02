import { throwWoowaError } from '../util/error.js';
import { isDuplicate } from '../util/validator.js';

export const validateWeekendStaffInput = (staffNamesInput) => {
  if (isDuplicate(staffNamesInput))
    throwWoowaError('비상 근무자는 휴일 순번에 1회만 편성되어야 한다.');
};
