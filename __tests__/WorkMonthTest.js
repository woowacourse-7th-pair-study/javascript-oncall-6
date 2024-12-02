import { ERROR_MESSAGE } from '../src/constant/message.js';
import WorkMonth from '../src/WorkMonth.js';

const errorCase = [
  {
    caseName: '월이 숫자가 아닌 경우',
    inputs: ['hi,월', '지예,월'],
    errorMessage: ERROR_MESSAGE.monthNotNumber,
  },
  {
    caseName: '월이 1월 ~ 12월이 아닌 경우',
    inputs: ['0,월', '13, 월'],
    errorMessage: ERROR_MESSAGE.monthNotInRange,
  },
  {
    caseName: '요일이 일, 월, 화, 수, 목, 금, 토 중 하나가 아닌 경우',
    inputs: ['1,하', '1,hi'],
    errorMessage: ERROR_MESSAGE.dayOfWeekInvalid,
  },
];

test.each(errorCase)(
  '$caseName 예외가 발생한다.',
  ({ inputs, errorMessage }) => {
    inputs.forEach((inputs) => {
      expect(() => new WorkMonth(inputs)).toThrow(errorMessage);
    });
  },
);
