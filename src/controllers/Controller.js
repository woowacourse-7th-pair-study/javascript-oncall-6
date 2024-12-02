import parser from '../utils/parser.js';
import validateMonthAndDay from '../validation/validateMonthAndDay.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  async start() {
    const { month, day } = await this.#getValidatedMonthAndDay();
    console.log(month, day);

    // const { weekDayEmployees, weekEndEmployees } = await this.#getValidatedWeekdayAndWeekEndEmployees();
    
  }

  /**
   * 월과 요일을 입력 받아 파싱 및 유효성 검증하여 반환한다.
   * @returns {{ month: number, day: string }}
   */
  async #getValidatedMonthAndDay() {
    try {
      const monthAndDay = await InputView.readMonthAndDay();
      const parsedMonthAndDay = parser.deleteEmptyValue(parser.stringToArray(monthAndDay));

      console.log(parsedMonthAndDay);
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

  }
}

export default Controller;
