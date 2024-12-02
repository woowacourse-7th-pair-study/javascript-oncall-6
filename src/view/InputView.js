import { Console } from '@woowacourse/mission-utils';

import MESSAGE from '../constant/input.js';

const InputView = {
  async readMonthAndDay() {
    const input = await Console.readLineAsync(MESSAGE.month_day);

    return input;
  },

  async readWeekdayOrder() {
    const input = await Console.readLineAsync(MESSAGE.weekday_order);

    return input;
  },

  async readWeekendOrder() {
    const input = await Console.readLineAsync(MESSAGE.weekend_order);

    return input;
  },
};

export default InputView;
