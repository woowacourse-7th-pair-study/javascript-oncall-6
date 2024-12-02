import { ERROR_MESSAGE } from './constant/message.js';
import { isNumber } from './util.js';

class WorkMonth {
  #days;

  constructor(month, startDayOfWeek) {
    this.#validateMonth(month);
  }

  #validateMonth(monthInput) {
    if (!isNumber(monthInput)) throw new Error(ERROR_MESSAGE.monthNotNumber);
  }
}

export default WorkMonth;
