import { Console } from '@woowacourse/mission-utils';
import ValidateModules from '../Utils/ValidateModules.js';

class InputView {
  static async getMonthAndDay() {
    try {
      const userInput = await Console.readLineAsync(
        '비상 근무를 배정할 월과 시작 요일을 입력하세요> ',
      );

      ValidateModules.checkMonthAndDay(userInput);

      const [monthString, day] = userInput.split(',');
      const month = Number(monthString);

      return { month, day };
    } catch (error) {
      Console.print(error.message);

      return await this.getMonthAndDay();
    }
  }

  static async getWeekDayAndHolidayWorkers() {
    try {
      const weekDayWorkers = await this.#getWorkers('평일');

      const holidayWorkers = await this.#getWorkers('휴일');

      return { weekDayWorkers, holidayWorkers };
    } catch (error) {
      Console.print(error.message);

      return await this.getWeekDayAndHolidayWorkers();
    }
  }

  static async #getWorkers(dayType) {
    const userInput = await Console.readLineAsync(
      `${dayType} 비상 근무 순번대로 사원 닉네임을 입력하세요> `,
    );

    ValidateModules.checkWorkers(userInput);

    const workers = userInput.split(',');

    return workers;
  }
}

export default InputView;
