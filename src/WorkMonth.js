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
    if (splitStringAndTrim(input, ',').length !== 2) throw new Error(ERROR_MESSAGE.wrongInput);
  }

  #validateMonth(parsedMonth) {
    if (!isNumber(parsedMonth)) throw new Error(ERROR_MESSAGE.monthNotNumber);
    if (!isInRange(parsedMonth, 1, 12)) throw new Error(ERROR_MESSAGE.monthNotInRange);
  }

  #validateDayOfWeek(dayOfWeekInput) {
    if (!DAY_OF_WEEK.includes(dayOfWeekInput)) throw new Error(ERROR_MESSAGE.dayOfWeekInvalid);
  }

  #initDays(month, startDayOfWeek) {
    const daysLength = MONTH_LENGTH[month];
    const startDayOfWeekIndex = DAY_OF_WEEK.indexOf(startDayOfWeek);
    this.#workMonthInfo = Array.from({ length: daysLength }, (_, i) => {
      const day = i + 1;
      const dayOfWeekIndex = (startDayOfWeekIndex + i) % 7;
      const dayOfWeek = DAY_OF_WEEK[dayOfWeekIndex];
      const isDayOff = HOLIDAY[month].includes(day) || dayOfWeek === '토' || dayOfWeek === '일';
      return { month, day, dayOfWeek, isDayOff, worker: '' };
    });
  }

  assignWorkers(normalDayShift, dayOffShift) {
    this.#workMonthInfo.forEach(({ isDayOff }, i) => {
      const yesterdayWorker = i - 1 >= 0 && this.#workMonthInfo[i - 1].worker;

      if (!isDayOff) {
        const onCallWorker = this.#getOnCallWorker(normalDayShift, yesterdayWorker);
        normalDayShift.onCall(onCallWorker);
        this.#workMonthInfo[i].worker = onCallWorker;
      } else {
        const onCallWorker = this.#getOnCallWorker(dayOffShift, yesterdayWorker);
        dayOffShift.onCall(onCallWorker);
        this.#workMonthInfo[i].worker = onCallWorker;
      }
    });
  }

  #getOnCallWorker(shift, yesterdayWorker) {
    const onCallWorker = shift.getOnCallWorker();
    if (onCallWorker === yesterdayWorker) {
      return shift.getNextOnCallWorker();
    }
    return onCallWorker;
  }

  getWorkSheetForPrint() {
    return this.#workMonthInfo
      .map(({ month, day, dayOfWeek, isDayOff, worker }) => {
        let dayOffString = '';
        if (isDayOff && dayOfWeek !== '토' && dayOfWeek !== '일') dayOffString = '(휴일)';
        return `${month}월 ${day}일 ${dayOfWeek}${dayOffString} ${worker}`;
      })
      .join('\n');
  }
}

export default WorkMonth;
