import { Console } from '@woowacourse/mission-utils';
import Input from '../View/Input.js';
import { INPUT_SEPARATOR } from '../constant/seperator.js';
import { parseInputWithSeparator } from '../parser/parseInput.js';
import { validateMonthAndDayInput } from '../validator/validateMonthInput.js';
import { validateWeekdayStaffInput } from '../validator/validateWeekdayStaffInput.js';
import { validateWeekendStaffInput } from '../validator/validateWeekendStaffInput.js';

class EmergencyDutyController {
  constructor() {}

  async init() {
    const startMonthAndDay = await this.#getValidatedStartMonthAndDay();

    const weekdayStaff = await this.#getValidatedWeekdayStaff();
    const weekendStaff = await this.#getValidatedWeekendStaff(weekdayStaff);

    Console.print(startMonthAndDay);
    Console.print(weekdayStaff);
    Console.print(weekendStaff);
  }

  #getValidatedStartMonthAndDay() {
    return Input.getStartMonthAndDay()((input) => {
      const parsedInput = parseInputWithSeparator(input, INPUT_SEPARATOR);
      validateMonthAndDayInput(parsedInput);
      return [Number(parsedInput[0]), parsedInput[1]];
    });
  }

  #getValidatedWeekdayStaff() {
    return Input.getWeekdayStaffInput()((input) => {
      const parsedInput = parseInputWithSeparator(input, INPUT_SEPARATOR);
      validateWeekdayStaffInput(parsedInput);
      return parsedInput;
    });
  }

  #getValidatedWeekendStaff(weekdayStaff) {
    return Input.getWeekendStaffInput()((input) => {
      const parsedInput = parseInputWithSeparator(input, INPUT_SEPARATOR);
      validateWeekendStaffInput(parsedInput, weekdayStaff);
      return parsedInput;
    });
  }
}

export default EmergencyDutyController;
