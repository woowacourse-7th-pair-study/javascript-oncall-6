import { Console } from '@woowacourse/mission-utils';
import Input from '../View/Input.js';
import { parseInputWithSeparator } from '../parser/parseInput.js';
import { INPUT_SEPARATOR } from '../constant/seperator.js';

class EmergencyDutyController {
  constructor() {}

  async init() {
    const startMonthAndDay = await Input.getStartMonthAndDay()((input) => {
      const parsedInput = parseInputWithSeparator(input, INPUT_SEPARATOR);
      return parsedInput;
    });

    Console.print(startMonthAndDay);
  }
}

export default EmergencyDutyController;
