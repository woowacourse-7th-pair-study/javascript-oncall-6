import AssignWorkDay from '../domains/AssignWorkDay.js';
import parser from '../utils/parser.js';
import validateMonthAndDay from '../validation/validateMonthAndDay.js';
import validateNickName from '../validation/validateNickName.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  async start() {
    const { month, startDay } = await this.#getValidatedMonthAndDay();
    const { weekDayEmployees, weekEndEmployees } = await this.#getValidatedWeekdayAndWeekEndEmployees();
    
    const assignWorkDay = new AssignWorkDay(weekDayEmployees, weekEndEmployees);
    assignWorkDay.assign(month, startDay);
    OutputView.printSchedule(assignWorkDay.getSchedule());
  }

  /**
   * 월과 요일을 입력 받아 파싱 및 유효성 검증하여 반환한다.
   * @returns {{ month: number, startDay: string }}
   */
  async #getValidatedMonthAndDay() {
    try {
      const monthAndDay = await InputView.readMonthAndDay();
      const parsedMonthAndDay = parser.deleteEmptyValue(parser.stringToArray(monthAndDay));

      return validateMonthAndDay(parsedMonthAndDay);
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return this.#getValidatedMonthAndDay();
    }
  }

  /**
   * 평일 및 휴일 순번 입력 받아 파싱 및 유효성 검증하여 반환한다.
   * @returns {{ weekDayEmployees: Array<string>, weekEndEmployees: Array<string> }}
   */
  async #getValidatedWeekdayAndWeekEndEmployees() {
    try {
      const parsedWeekDayEmployees = await this.#validateWeekDayEmployees();
      const parsedWeekEndEmployees = await this.#validateWeekEndEmployees();

      return { weekDayEmployees: parsedWeekDayEmployees, weekEndEmployees: parsedWeekEndEmployees };
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return this.#getValidatedWeekdayAndWeekEndEmployees();
    }
  }

  async #validateWeekDayEmployees() {
    const weekDayEmployees = await InputView.readWeekDay();
    const parsedWeekDayEmployees = parser.deleteEmptyValue(parser.stringToArray(weekDayEmployees));
    validateNickName(parsedWeekDayEmployees);

    return parsedWeekDayEmployees;
  }

  async #validateWeekEndEmployees() {
    const weekEndEmployees = await InputView.readWeekEnd();
    const parsedWeekEndEmployees = parser.deleteEmptyValue(parser.stringToArray(weekEndEmployees));
    validateNickName(parsedWeekEndEmployees);

    return parsedWeekEndEmployees;
  }
}

export default Controller;
