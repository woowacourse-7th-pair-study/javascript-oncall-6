import { ERROR_MESSAGE } from '../src/constant/message.js';
import WorkMonth from '../src/WorkMonth.js';

const errorCase = [
  {
    caseName: '월이 숫자가 아닌 경우',
    inputs: ['hi', '지예'],
    errorMessage: ERROR_MESSAGE.monthNotNumber,
  },
];

test.each(errorCase)(
  '$caseName 예외가 발생한다.',
  ({ inputs, errorMessage }) => {
    inputs.forEach((input) => {
      expect(() => new WorkMonth(input)).toThrow(errorMessage);
    });
  },
);
