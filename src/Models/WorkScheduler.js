import { HOLIDAY_INFO, MONTH_DAYS, WEEK_NAME } from '../constants.js';

class WorkScheduler {
  static createWorkSchedule(month, day, workerInfo) {
    const { weekDayWorkers, holidayWorkers } = workerInfo;
    const workSchedule = [''];

    let curWeekNameIndex = WEEK_NAME.indexOf(day);

    let weekDayWorkersIndex = 0;
    let holidayWorkersIndex = 0;

    for (let curDay = 1; curDay <= MONTH_DAYS[month]; curDay += 1) {
      // 평일 근무자 삽입
      if (curWeekNameIndex < 5 && !HOLIDAY_INFO[month].includes(curDay)) {
        workSchedule.push(weekDayWorkers[weekDayWorkersIndex]);
        weekDayWorkersIndex = (weekDayWorkersIndex + 1) % weekDayWorkers.length;
      }
      // 휴일 근무자 삽입
      else {
        workSchedule.push(holidayWorkers[holidayWorkersIndex]);
        holidayWorkersIndex = (holidayWorkersIndex + 1) % holidayWorkers.length;
      }

      curWeekNameIndex = (curWeekNameIndex + 1) % WEEK_NAME.length;
    }

    return workSchedule;
  }
}

export default WorkScheduler;
