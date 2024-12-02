import { HOLIDAY_INFO, MONTH_DAYS, WEEK_NAME } from '../constants.js';

class WorkScheduler {
  #weekdayWorkers;
  #holidayWorkers;
  #workSchedule;
  #weekdayQueue;
  #holidayQueue;
  #curWeekNameIndex;
  #weekdayWorkersIndex;
  #holidayWorkersIndex;

  constructor(day, workerInfo) {
    const { weekDayWorkers, holidayWorkers } = workerInfo;

    this.#weekdayWorkers = weekDayWorkers;
    this.#holidayWorkers = holidayWorkers;
    this.#workSchedule = [''];
    this.#weekdayQueue = [];
    this.#holidayQueue = [];
    this.#curWeekNameIndex = WEEK_NAME.indexOf(day);
    this.#weekdayWorkersIndex = 0;
    this.#holidayWorkersIndex = 0;
  }

  #weekdayWorkerAction(curDay) {
    if (this.#weekdayWorkers[this.#weekdayWorkersIndex] === this.#workSchedule[curDay - 1]) {
      // 전일 근무자와 같은 경우
      this.#weekdayQueue = [...this.#weekdayQueue, weekDayWorkers[this.#weekdayWorkersIndex]];
      this.#weekdayWorkersIndex = (this.#weekdayWorkersIndex + 1) % this.#weekdayWorkers.length;
      this.#workSchedule.push(this.#weekdayWorkers[this.#weekdayWorkersIndex]);
    } else {
      if (this.#weekdayQueue.length) {
        const delayedWorker = this.#weekdayQueue.pop();
        this.#workSchedule.push(delayedWorker);
      } else {
        this.#workSchedule.push(this.#weekdayWorkers[this.#weekdayWorkersIndex]);
        this.#weekdayWorkersIndex = (this.#weekdayWorkersIndex + 1) % this.#weekdayWorkers.length;
      }
    }
  }

  #holidayWorkerAction(curDay) {
    if (this.#holidayWorkers[this.#holidayWorkersIndex] === this.#workSchedule[curDay - 1]) {
      this.#holidayQueue = [...this.#holidayQueue, this.#holidayWorkers[this.#holidayWorkersIndex]];
      this.#holidayWorkersIndex = (this.#holidayWorkersIndex + 1) % this.#holidayWorkers.length;
      this.#workSchedule.push(this.#holidayWorkers[this.#holidayWorkersIndex]);
    } else {
      if (this.#holidayQueue.length) {
        const delayedWorker = this.#holidayQueue.pop();
        this.#workSchedule.push(delayedWorker);
      } else {
        this.#workSchedule.push(this.#holidayWorkers[this.#holidayWorkersIndex]);
        this.#holidayWorkersIndex = (this.#holidayWorkersIndex + 1) % this.#holidayWorkers.length;
      }
    }
  }

  createWorkSchedule(month) {
    for (let curDay = 1; curDay <= MONTH_DAYS[month]; curDay += 1) {
      // 평일 근무자 삽입
      if (this.#curWeekNameIndex < 5 && !HOLIDAY_INFO[month].includes(curDay)) {
        this.#weekdayWorkerAction(curDay);
      }
      // 휴일 근무자 삽입
      else {
        this.#holidayWorkerAction(curDay);
      }

      this.#curWeekNameIndex = (this.#curWeekNameIndex + 1) % WEEK_NAME.length;
    }
  }

  get workSchedule() {
    return this.#workSchedule;
  }
}

export default WorkScheduler;
