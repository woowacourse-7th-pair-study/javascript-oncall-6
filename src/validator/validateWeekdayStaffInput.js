import { throwWoowaError } from '../util/error.js';
import { isDuplicate, isInRange } from '../util/validator.js';

export const validateWeekdayStaffInput = (input) => {
  if (!isInRange(input.length, 5, 35))
    throwWoowaError('근무 인원수가 5보다 작고, 35보다 크면 안됩니다.');

  if (isDuplicate(input))
    throwWoowaError('비상 근무자는 평일 순번에 1회만 편성되어야 한다.');
};
