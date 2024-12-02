import { Console } from '@woowacourse/mission-utils';
import EmergencyDutyMachine from '../Model/EmergencyDutyMachine.js';
import EmergencyDutyScheduler from '../Model/EmergencyDutyScheduler.js';
import Input from '../View/Input.js';
import Output from '../View/Output.js';
import { INPUT_SEPARATOR } from '../constant/seperator.js';
import { parseInputWithSeparator } from '../parser/parseInput.js';
import { validateMonthAndDayInput } from '../validator/validateMonthInput.js';
import { validateWeekdayStaffInput } from '../validator/validateWeekdayStaffInput.js';
import { validateWeekendStaffInput } from '../validator/validateWeekendStaffInput.js';

class EmergencyDutyController {
  #scheduler;

  async init() {
    const [dutyMonth, startDays] = await this.#getValidatedStartMonthAndDays();
    this.#scheduler = new EmergencyDutyScheduler(dutyMonth, startDays);

    const { weekdayStaff, weekendStaff } =
      await this.#getValidatedEmergencyDutyStaff();
    const machine = new EmergencyDutyMachine(weekdayStaff, weekendStaff);
    this.#scheduler.assignMonthDutyStaff(machine);

    this.#printSchedule();
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

  #printSchedule() {
    const dutySchedule = this.#scheduler.getScheduleForPrint();
    Output.printEmergencyDutySchedule(dutySchedule);
  }
}

export default EmergencyDutyController;
