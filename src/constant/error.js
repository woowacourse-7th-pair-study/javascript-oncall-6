import { RULE } from './rule.js';

export const ERROR_MESSAGE = Object.freeze({
  invalidInput: '유효하지 않은 입력 값입니다.',
  notNumberMonthInput: '입력 받은 월 정보가 숫자가 아닙니다.',
  notIntegerMonthInput: '입력 받은 월 정보가 정수가 아닙니다.',
  notInRangeMonthInput: '입력 받은 월 정보가 1 ~ 12 사이여야 합니다.',
  invalidDaysInput: '입력 받은 요일 정보가 잘못되었습니다.',
  notInRangeStaffCount: `근무 인원수가 ${RULE.staffCount.min}보다 작고, ${RULE.staffCount.max}보다 크면 안됩니다.`,
  duplicateStaffName: '비상 근무자는 순번에 1회만 편성되어야 한다.',
  notInRangeStaffNameLength: `근무 닉네임이 ${RULE.nameLength.min}자 이상, ${RULE.nameLength.max}자 이하여야 합니다.`,
  differentStaffList: '비상 근무자는 평일과 휴일이 다르면 안됩니다.',
});
