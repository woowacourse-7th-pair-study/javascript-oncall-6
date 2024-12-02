import { ERROR_MESSAGE } from './constant/message.js';
import { isInRange, isNumber } from './util.js';

class WorkMonth {
  #days;

  constructor(month, startDayOfWeek) {
    this.#validateMonth(month);
  }

  #validateMonth(monthInput) {
    const monthNumber = Number(monthInput);

    if (!isNumber(monthNumber)) throw new Error(ERROR_MESSAGE.monthNotNumber);
    if (!isInRange(monthNumber, 1, 12))
      throw new Error(ERROR_MESSAGE.monthNotInRange);
  }
}

export default WorkMonth;
