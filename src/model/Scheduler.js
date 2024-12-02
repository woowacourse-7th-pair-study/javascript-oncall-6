import { Console } from "@woowacourse/mission-utils";
export default class Scheduler {
  #weekdayOrder = [];
  #holidayOrder = [];
  #month;
  #calendar;
  #scheduler;
  //순서 배열로 입력받음
  constructor(weekdayOrder, holidayOrder, calendar, month) {
    this.#weekdayOrder = weekdayOrder;
    this.#holidayOrder = holidayOrder;
    //캘린더 객체로 만든 calendar 배열
    this.#calendar = calendar;
    this.#month = month;
    this.#scheduler = this.generateScheduleWithDoubleCheck(
      this.generateSchedulerWithoutDoubleCheck()
    );
  }
  toPrintString() {
    return this.#scheduler.map(({ day, isPublicHoliday, worker }, index) => {
      let holiday = "";
      if (this.isPrintHoliday(day, isPublicHoliday)) holiday = "(휴일)";
      const string =
        this.#month +
        "월 " +
        (index + 1) +
        "일 " +
        day +
        holiday +
        " " +
        worker;
      return string;
    });
  }
  get scheduler() {
    return this.#scheduler;
  }
  //scheduler를 순환하면서 연속근무시 스케쥴 바꿈
  generateScheduleWithDoubleCheck(schedulerWithoutDoubleCheck) {
    const scheduler = [...schedulerWithoutDoubleCheck];

    scheduler.forEach((_, index) => {
      if (this.checkDouble(scheduler, index)) {
        const nextWorkerIndex = this.getNextWorkerIndex(scheduler, index);
        this.changeSchedule(scheduler, index, nextWorkerIndex);
      }
    });
    return scheduler;
  }

  //스케쥴 바꿈
  changeSchedule(scheduler, doubleWorkerIndex, nextWorkerIndex) {
    const { worker } = scheduler[doubleWorkerIndex];
    const { nextWorker } = this.getNextInfo(scheduler, nextWorkerIndex);
    scheduler[doubleWorkerIndex].worker = nextWorker;
    scheduler[nextWorkerIndex].worker = worker;
  }
  //연속근무인지 체크
  checkDouble(schedulerWithoutDoubleCheck, index) {
    if (
      schedulerWithoutDoubleCheck[index - 1] &&
      schedulerWithoutDoubleCheck[index - 1].worker ==
        schedulerWithoutDoubleCheck[index].worker
    )
      return true;
  }

  //바꿀 스케쥴의 index 얻기 //흠..비효율적?
  getNextWorkerIndex(schedulerWithoutDoubleCheck, index) {
    const { day, isPublicHoliday } = schedulerWithoutDoubleCheck[index];
    const isHoliday = this.isHoliday(day, isPublicHoliday);
    if (!isHoliday) {
      return this.getNextWeekdayWorkerIndex(schedulerWithoutDoubleCheck, index);
    }
    if (isHoliday)
      return this.getNextHolidayWorkerIndex(schedulerWithoutDoubleCheck, index);
  }

  getNextInfo(scheduler, nextIndex) {
    const {
      day: nextDay,
      isPublicHoliday: nextisPublicHoliday,
      worker: nextWorker,
    } = scheduler[nextIndex];
    return { nextDay, nextisPublicHoliday, nextWorker };
  }
  getNextWeekdayWorkerIndex(schedulerWithoutDoubleCheck, index) {
    for (let i = index + 1; i < schedulerWithoutDoubleCheck.length; i++) {
      const { nextDay, nextisPublicHoliday } = this.getNextInfo(
        schedulerWithoutDoubleCheck,
        i
      );
      if (this.isHoliday(nextDay, nextisPublicHoliday)) continue;
      return i;
    }
  }
  getNextHolidayWorkerIndex(schedulerWithoutDoubleCheck, index) {
    for (let i = index + 1; i < schedulerWithoutDoubleCheck.length; i++) {
      const { nextDay, nextisPublicHoliday } = this.getNextInfo(
        schedulerWithoutDoubleCheck,
        i
      );
      if (!this.isHoliday(nextDay, nextisPublicHoliday)) continue;
      return i;
    }
  }

  generateSchedulerWithoutDoubleCheck() {
    let weekdayIndex = 0;
    let holidayIndex = 0;
    const scheduler = this.#calendar.map(({ day, isPublicHoliday }) => {
      const isHoliday = this.isHoliday(day, isPublicHoliday);
      //평일일떄
      if (!isHoliday) {
        const worker = this.getWeekdayWorker(weekdayIndex);
        weekdayIndex += 1;
        return { day, isPublicHoliday, worker };
      }
      //휴일일때
      const worker = this.getholidayWorker(holidayIndex);
      holidayIndex += 1;
      return { day, isPublicHoliday, worker };
    });
    return scheduler;
  }

  getWeekdayWorker(weekdayIndex) {
    const worker = this.#weekdayOrder[weekdayIndex % this.#weekdayOrder.length];
    return worker;
  }

  getholidayWorker(holidayIndex) {
    const worker = this.#holidayOrder[holidayIndex % this.#holidayOrder.length];
    return worker;
  }

  //today = {day : 요일(문자),  isPublicHoliday : false/true }
  isHoliday(day, isPublicHoliday) {
    if (day === "토" || day === "일" || isPublicHoliday) {
      return true;
    }
    return false;
  }
  isPrintHoliday(day, isPrintHoliday) {
    if (isPrintHoliday && day !== "토" && day !== "일") {
      return true;
    }
    return false;
  }
}
