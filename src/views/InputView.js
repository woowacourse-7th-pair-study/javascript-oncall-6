import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../constants/constants.js';

const readPipe = (promptMessage) => {
  try {
    return Console.readLineAsync(promptMessage);
  } catch (error) {
    throw new Error(error.message);
  }
}

const InputView = {
  async readMonthAndDay() {
    return await readPipe(INPUT_MESSAGES.MONTH_AND_DAY);
  },

  async readWeekDay() {
    return await readPipe(INPUT_MESSAGES.WEEKDAY);
  },

  async readWeekEnd() {
    return await readPipe(INPUT_MESSAGES.WEEKEND);
  },
}

export default InputView;
