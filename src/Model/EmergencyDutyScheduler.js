import { DAYS } from '../constant/days.js';
import { MONTH } from '../constant/month.js';
import { isHoliday, isWeekend } from '../util/validator.js';

class EmergencyDutyScheduler {
  #dutyMonth;
  #scheduler;

  constructor(month, startDays) {
    this.#dutyMonth = month;
    this.#scheduler = [];
    this.#createScheduler(month, startDays);
  }

  #createScheduler(month, startDays) {
    const { start: startDate, end: endDate } = MONTH[month];
    const startDaysIndex = DAYS.indexOf(startDays);

    for (let curDate = startDate; curDate <= endDate; curDate += 1) {
      const curDaysIndex = (startDaysIndex + (curDate - 1)) % 7;
      this.#pushSchedule(
        curDate,
        curDaysIndex,
        isWeekend(DAYS[curDaysIndex]),
        isHoliday(this.#dutyMonth, curDate),
      );
    }
  }

  #pushSchedule(curDate, curDaysIndex, isCurDateIsWeekend, isCurDateIsHoliday) {
    this.#scheduler.push({
      date: curDate,
      days: DAYS[curDaysIndex],
      isWeekend: isCurDateIsWeekend,
      isHoliday: isCurDateIsWeekend || isCurDateIsHoliday,
      staff: '',
    });
  }

  assignMonthDutyStaff(dutyMachine) {
    this.#scheduler = this.#scheduler.map((schedule) => {
      const assignedStaff = dutyMachine.assignDutyStaff(schedule.isHoliday);
      return { ...schedule, staff: assignedStaff };
    });
  }

  getScheduleForPrint() {
    return this.#scheduler.map((schedule) => ({
      month: this.#dutyMonth,
      date: schedule.date,
      days: schedule.days,
      staff: schedule.staff,
      isPrintHolidayString: !schedule.isWeekend && schedule.isHoliday,
    }));
  }
}

export default EmergencyDutyScheduler;
