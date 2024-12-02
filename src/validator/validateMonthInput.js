import { DAYS } from '../constant/days.js';
import { throwWoowaError } from '../util/error.js';
import { isInRange, isInteger, isNumber } from '../util/validator.js';

export const validateMonthAndDayInput = (input) => {
  if (input.length !== 2) throwWoowaError('유효하지 않은 입력 값입니다.');

  const month = Number(input[0]);
  if (!isNumber(month)) throwWoowaError('입력 받은 월 정보가 숫자가 아닙니다.');
  if (!isInteger(month))
    throwWoowaError('입력 받은 월 정보가 정수가 아닙니다.');
  if (!isInRange(month, 1, 12))
    throwWoowaError('입력 받은 월 정보가 1 ~ 12 사이여야 합니다.');

  const day = input[1];
  if (!DAYS.includes(day))
    throwWoowaError('입력 받은 요일 정보가 잘못되었습니다.');
};
