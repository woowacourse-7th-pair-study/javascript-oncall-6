import { Console } from '@woowacourse/mission-utils';
import Input from '../View/Input.js';
import { INPUT_SEPARATOR } from '../constant/seperator.js';
import { parseInputWithSeparator } from '../parser/parseInput.js';
import { validateMonthAndDayInput } from '../validator/validateMonthInput.js';
import { validateWeekdayStaffInput } from '../validator/validateWeekdayStaffInput.js';
import { validateWeekendStaffInput } from '../validator/validateWeekendStaffInput.js';
import EmergencyDutyCalculator from '../Model/EmergencyDutyMachine.js';
import EmergencyDutyScheduler from '../Model/EmergencyDutyScheduler.js';

class EmergencyDutyController {
  async init() {
    const [dutyMonth, startDays] = await this.#getValidatedStartMonthAndDays();

    const { weekdayStaff, weekendStaff } =
      await this.#getValidatedEmergencyDutyStaff();

    const scheduler = new EmergencyDutyScheduler(dutyMonth, startDays);

    const calculator = new EmergencyDutyCalculator(weekdayStaff, weekendStaff);

    scheduler.assignMonthDutyStaff(calculator);
  }

  #getValidatedStartMonthAndDays() {
    return Input.getStartMonthAndDay()((input) => {
      const parsedInput = parseInputWithSeparator(input, INPUT_SEPARATOR);
      validateMonthAndDayInput(parsedInput);
      return [Number(parsedInput[0]), parsedInput[1]];
    });
  }

  async #getValidatedEmergencyDutyStaff() {
    try {
      const weekdayStaff = await this.#getValidatedWeekdayStaff();

      const weekendStaff = await this.#getValidatedWeekendStaff(weekdayStaff);

      return { weekdayStaff, weekendStaff };
    } catch (error) {
      Console.print(`${error.message}\n`);
      return this.#getValidatedEmergencyDutyStaff();
    }
  }

  async #getValidatedWeekdayStaff() {
    const input = await Input.getWeekdayStaffInput();
    const parsedInput = parseInputWithSeparator(input, INPUT_SEPARATOR);
    validateWeekdayStaffInput(parsedInput);

    return parsedInput;
  }

  async #getValidatedWeekendStaff(weekdayStaff) {
    const input = await Input.getWeekendStaffInput();
    const parsedInput = parseInputWithSeparator(input, INPUT_SEPARATOR);
    validateWeekendStaffInput(parsedInput, weekdayStaff);

    return parsedInput;
  }
}

export default EmergencyDutyController;
