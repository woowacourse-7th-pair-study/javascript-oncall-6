import { DAYS } from '../constant/days.js';
import { MONTH } from '../constant/month.js';
import { isWeekend } from '../util/validator.js';

class EmergencyDutyScheduler {
  #dutyMonth;
  #scheduler;

  constructor(month, startDays) {
    this.#dutyMonth = month;
    this.#scheduler = this.#createScheduler(month, startDays);
  }

  #createScheduler(month, startDays) {
    const scheduler = [];
    const { start: startDate, end: endDate } = MONTH[month];
    const startDaysIndex = DAYS.indexOf(startDays);

    for (let curDate = startDate; curDate <= endDate; curDate += 1) {
      const curDaysIndex = (startDaysIndex + (curDate - 1)) % 7;
      const isCurDateIsWeekend = isWeekend(DAYS[curDaysIndex]);

      scheduler.push({
        date: curDate,
        isWeekend: isCurDateIsWeekend,
        isHoliday: isCurDateIsWeekend,
      });
    }

    return scheduler;
  }
}

export default EmergencyDutyScheduler;
