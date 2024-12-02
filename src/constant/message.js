import { SHIFT_LENGTH_RANGE, WORKER_NAME_LENGTH_MAX } from './rule.js';

export const INPUT_MESSAGE = {
  start: `비상 근무를 배정할 월과 시작 요일을 입력하세요> `,
  normalDay: `평일 비상 근무 순번대로 사원 닉네임을 입력하세요> `,
  dayOff: `휴일 비상 근무 순번대로 사원 닉네임을 입력하세요> `,
};

export const ERROR_MESSAGE = {
  noBlank: '[ERROR] 공백은 입력할 수 없습니다. 다시 입력해 주세요.',
  wrongInput: '[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.',
  monthNotNumber: '[ERROR] 비상 근무를 배정할 월은 숫자로 입력해 주세요.',
  monthNotInRange: '[ERROR] 1월 ~ 12월 중에서 입력해 주세요.',
  dayOfWeekInvalid: '[ERROR] 올바른 요일을 입력해 주세요',
  shiftNoDuplicate: '[ERROR] 비상 근무 순번에 이름은 중복될 수 없습니다. 다시 입력해 주세요.',
  shiftLengthNotInRange: `[ERROR] 비상 근무자는 최소 ${SHIFT_LENGTH_RANGE.min}명 ~ 최대 ${SHIFT_LENGTH_RANGE.max}명까지 가능합니다. 다시 입력해 주세요.`,
  workerNameLengthOverMax: `[ERROR] 비상 근무자의 닉네임은 최대 ${WORKER_NAME_LENGTH_MAX}까지 입력 가능합니다. 다시 입력해 주세요.`,
};
