import { ERROR_MESSAGE } from '../src/constant/message.js';
import WorkMonth from '../src/WorkMonth.js';

const errorCase = [
  {
    caseName: '월이 숫자가 아닌 경우',
    monthInputs: ['hi', '지예'],
    dayInputs: ['월', '월'],
    errorMessage: ERROR_MESSAGE.monthNotNumber,
  },
  {
    caseName: '월이 1월 ~ 12월이 아닌 경우',
    monthInputs: ['0', '13'],
    dayInputs: ['월', '월'],
    errorMessage: ERROR_MESSAGE.monthNotInRange,
  },
  {
    caseName: '요일이 일, 월, 화, 수, 목, 금, 토 중 하나가 아닌 경우',
    monthInputs: ['1', '1'],
    dayInputs: ['하', 'hi'],
    errorMessage: ERROR_MESSAGE.dayOfWeekInvalid,
  },
];

test.each(errorCase)(
  '$caseName 예외가 발생한다.',
  ({ monthInputs, dayInputs, errorMessage }) => {
    monthInputs.forEach((monthInput, i) => {
      expect(() => new WorkMonth(monthInput, dayInputs[i])).toThrow(
        errorMessage,
      );
    });
  },
);
