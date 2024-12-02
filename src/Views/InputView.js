import { Console } from '@woowacourse/mission-utils';

class InputView {
  static async getMonthAndDay() {
    try {
      const userInput = await Console.readLineAsync(
        '비상 근무를 배정할 월과 시작 요일을 입력하세요> ',
      );

      // TODO: validation
      const [monthString, day] = userInput.split(',');
      const month = Number(monthString);

      return { month, day };
    } catch (error) {
      Console.print(error.me);

      return await this.getMonthAndDay();
    }
  }
}

export default InputView;
