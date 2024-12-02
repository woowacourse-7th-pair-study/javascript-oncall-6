import {
  MONTH_END,
  DAY,
  DAY_INDEX,
  HOLIDAY,
  WEEKEND,
} from '../constant/month.js';

class Calendar {
  #month;
  #holiday;
  #calendar;

  constructor(month, startDay) {
    this.#month = month;
    this.#holiday = HOLIDAY[month];
    this.#calendar = this.#createCalendar(month, startDay);
  }

  getCalendar() {
    return this.#calendar;
  }

  #createCalendar(month, startDay) {
    const endDate = this.#getEndDate(month);
    const calendar = [];
    let date = 1;
    let dayIndex = DAY_INDEX[startDay];

    while (date <= endDate) {
      const dayInfo = {
        date,
        day: DAY[dayIndex],
        isHoliday: this.#isHoliday(date),
        isWeekend: this.#isWeekend(DAY[dayIndex]),
        worker: '',
      };
      calendar.push(dayInfo);
      date += 1;
      dayIndex = (dayIndex + 1) % 7;
    }

    return calendar;
  }

  #getEndDate(month) {
    if (month === 2) return 28;

    if (MONTH_END.thirty_one.includes(month)) return 31;

    return 30;
  }

  #isHoliday(date) {
    if (this.#holiday === null) return false;

    return this.#holiday.includes(date);
  }

  #isWeekend(day) {
    return WEEKEND.includes(day);
  }
}

export default Calendar;
