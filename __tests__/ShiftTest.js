import { ERROR_MESSAGE } from '../src/constant/message.js';
import Shift from '../src/Shift.js';

const errorCase = [
  {
    caseName: '중복되는 이름이 있는 경우',
    inputs: ['준팍,도밥,고니,수아,루루,글로,수아'],
    errorMessage: ERROR_MESSAGE.shiftNoDuplicate,
  },
];

test.each(errorCase)(
  '$caseName 예외가 발생한다.',
  ({ inputs, errorMessage }) => {
    inputs.forEach((inputs) => {
      expect(() => new Shift(inputs)).toThrow(errorMessage);
    });
  },
);
