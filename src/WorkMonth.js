import { DAY_OF_WEEK, HOLIDAY, MONTH_LENGTH } from './constant/daysInfo.js';
import { ERROR_MESSAGE } from './constant/message.js';
import { isInRange, isNumber, splitStringAndTrim } from './util.js';

class WorkMonth {
  #workMonthInfo;

  constructor(input) {
    this.#validateInput(input);

    const [month, startDayOfWeek] = splitStringAndTrim(input, ',');
    const parsedMonth = Number(month);

    this.#validateMonth(parsedMonth);
    this.#validateDayOfWeek(startDayOfWeek);

    this.#initDays(parsedMonth, startDayOfWeek);
  }

  #validateInput(input) {
    if (input.trim() === '') throw new Error(ERROR_MESSAGE.noBlank);
    if (splitStringAndTrim(input, ',').length !== 2)
      throw new Error(ERROR_MESSAGE.wrongInput);
  }

  #validateMonth(parsedMonth) {
    if (!isNumber(parsedMonth)) throw new Error(ERROR_MESSAGE.monthNotNumber);
    if (!isInRange(parsedMonth, 1, 12))
      throw new Error(ERROR_MESSAGE.monthNotInRange);
  }

  #validateDayOfWeek(dayOfWeekInput) {
    if (!DAY_OF_WEEK.includes(dayOfWeekInput))
      throw new Error(ERROR_MESSAGE.dayOfWeekInvalid);
  }

  #initDays(month, startDayOfWeek) {
    const daysLength = MONTH_LENGTH[month];
    const startDayOfWeekIndex = DAY_OF_WEEK.indexOf(startDayOfWeek);
    this.#workMonthInfo = Array.from({ length: daysLength }, (_, i) => {
      const day = i + 1;
      const dayOfWeekIndex = (startDayOfWeekIndex + i) % 7;
      const dayOfWeek = DAY_OF_WEEK[dayOfWeekIndex];
      const isDayOff =
        HOLIDAY[month].includes(day) ||
        dayOfWeek === '토' ||
        dayOfWeek === '일';
      return { month, day, dayOfWeek, isDayOff };
    });
  }
}

export default WorkMonth;
