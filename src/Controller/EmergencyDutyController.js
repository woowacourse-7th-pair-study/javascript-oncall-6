import { Console } from '@woowacourse/mission-utils';
import Input from '../View/Input.js';
import { INPUT_SEPARATOR } from '../constant/seperator.js';
import { parseInputWithSeparator } from '../parser/parseInput.js';
import { validateMonthAndDayInput } from '../validator/validateMonthInput.js';

class EmergencyDutyController {
  constructor() {}

  async init() {
    const startMonthAndDay = await Input.getStartMonthAndDay()((input) => {
      const parsedInput = parseInputWithSeparator(input, INPUT_SEPARATOR);
      validateMonthAndDayInput(parsedInput);
      return [Number(parsedInput[0]), parsedInput[1]];
    });

    const weekdayStaff = await Input.getWeekdayStaffInput()((input) => {
      const parsedInput = parseInputWithSeparator(input, INPUT_SEPARATOR);
      return parsedInput;
    });

    Console.print(startMonthAndDay);
    Console.print(weekdayStaff);
  }
}

export default EmergencyDutyController;
