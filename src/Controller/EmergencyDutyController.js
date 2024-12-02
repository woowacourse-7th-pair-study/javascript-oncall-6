import { Console } from '@woowacourse/mission-utils';
import Input from '../View/Input.js';
import { parseInputWithSeparator } from '../parser/parseInput.js';
import { INPUT_SEPARATOR } from '../constant/seperator.js';
import { throwWoowaError } from '../util/error.js';
import { DAYS } from '../constant/days.js';

class EmergencyDutyController {
  constructor() {}

  async init() {
    const startMonthAndDay = await Input.getStartMonthAndDay()((input) => {
      const parsedInput = parseInputWithSeparator(input, INPUT_SEPARATOR);
      if (parsedInput.length !== 2)
        throwWoowaError('유효하지 않은 입력 값입니다.');

      if (Number.isNaN(Number(parsedInput[0])))
        throwWoowaError('입력 받은 월 정보가 숫자가 아닙니다.');

      if (!Number.isInteger(Number(parsedInput[0])))
        throwWoowaError('입력 받은 월 정보가 정수가 아닙니다.');

      const isInRange = (value, min, max) => value >= min && value <= max;

      if (!isInRange(Number(parsedInput[0]), 1, 12))
        throwWoowaError('입력 받은 월 정보가 1 ~ 12 사이여야 합니다.');

      if (!DAYS.includes(parsedInput[1]))
        throwWoowaError('입력 받은 요일 정보가 잘못되었습니다.');
      return parsedInput;
    });

    Console.print(startMonthAndDay);
  }
}

export default EmergencyDutyController;
