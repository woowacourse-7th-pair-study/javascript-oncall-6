import { HOLIDAY_INFO, MONTH_DAYS, WEEK_NAME } from '../constants.js';

class WorkScheduler {
  static createWorkSchedule(month, day, workerInfo) {
    const { weekDayWorkers, holidayWorkers } = workerInfo;
    const workSchedule = [''];

    let weekDayQueue = [];
    let holidayQueue = [];

    let curWeekNameIndex = WEEK_NAME.indexOf(day);

    let weekDayWorkersIndex = 0;
    let holidayWorkersIndex = 0;

    for (let curDay = 1; curDay <= MONTH_DAYS[month]; curDay += 1) {
      // 평일 근무자 삽입
      if (curWeekNameIndex < 5 && !HOLIDAY_INFO[month].includes(curDay)) {
        if (weekDayWorkers[weekDayWorkersIndex] === workSchedule[curDay - 1]) {
          // 전일 근무자와 같은 경우
          weekDayQueue = [...weekDayQueue, weekDayWorkers[weekDayWorkersIndex]];
          weekDayWorkersIndex = (weekDayWorkersIndex + 1) % weekDayWorkers.length;
          workSchedule.push(weekDayWorkers[weekDayWorkersIndex]);
        } else {
          if (weekDayQueue.length) {
            const delayedWorker = weekDayQueue.pop();
            workSchedule.push(delayedWorker);
          } else {
            workSchedule.push(weekDayWorkers[weekDayWorkersIndex]);
            weekDayWorkersIndex = (weekDayWorkersIndex + 1) % weekDayWorkers.length;
          }
        }
      }
      // 휴일 근무자 삽입
      else {
        if (holidayWorkers[holidayWorkersIndex] === workSchedule[curDay - 1]) {
          holidayQueue = [...holidayQueue, holidayWorkers[holidayWorkersIndex]];
          holidayWorkersIndex = (holidayWorkersIndex + 1) % holidayWorkers.length;
          workSchedule.push(holidayWorkers[holidayWorkersIndex]);
        } else {
          if (holidayQueue.length) {
            const delayedWorker = holidayQueue.pop();
            workSchedule.push(delayedWorker);
          } else {
            workSchedule.push(holidayWorkers[holidayWorkersIndex]);
            holidayWorkersIndex = (holidayWorkersIndex + 1) % holidayWorkers.length;
          }
        }
      }

      curWeekNameIndex = (curWeekNameIndex + 1) % WEEK_NAME.length;
    }

    return workSchedule;
  }
}

export default WorkScheduler;
