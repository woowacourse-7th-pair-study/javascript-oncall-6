import { DAY_OF_WEEK } from './constant/daysInfo.js';
import { ERROR_MESSAGE } from './constant/message.js';
import { isInRange, isNumber } from './util.js';

class WorkMonth {
  #days;

  constructor(month, startDayOfWeek) {
    this.#validateMonth(month);
    this.#validateDayOfWeek(startDayOfWeek);
    // TODO : this.#days에 비상 근무를 배정할 월에 대한 정보 담기
  }

  #validateMonth(monthInput) {
    const monthNumber = Number(monthInput);

    if (!isNumber(monthNumber)) throw new Error(ERROR_MESSAGE.monthNotNumber);
    if (!isInRange(monthNumber, 1, 12))
      throw new Error(ERROR_MESSAGE.monthNotInRange);
  }

  #validateDayOfWeek(dayOfWeekInput) {
    if (!DAY_OF_WEEK.includes(dayOfWeekInput.trim()))
      throw new Error(ERROR_MESSAGE.dayOfWeekInvalid);
  }
}

export default WorkMonth;
