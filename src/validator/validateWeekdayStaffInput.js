import { throwWoowaError } from '../util/error.js';
import { isInRange } from '../util/validator.js';

export const validateWeekdayStaffInput = (input) => {
  if (!isInRange(input.length, 5, 35))
    throwWoowaError('근무 인원수가 5보다 작고, 35보다 크면 안됩니다.');
};
