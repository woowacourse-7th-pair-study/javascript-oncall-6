export default class Scheduler {
  #weekdayOrder = [];
  #holidayOrder = [];

  #calendar;
  #scheduler;
  //순서 배열로 입력받음
  constructor(weekdayOrder, holidayOrder, calendar) {
    this.#weekdayOrder = weekdayOrder;
    this.#holidayOrder = holidayOrder;
    //캘린더 객체로 만든 calendar 배열
    this.#calendar = calendar;
    this.#scheduler = this.generateSchedulerWithoutDouble();
  }
  get scheduler() {
    return this.#scheduler;
  }
  generateSchedulerWithoutDouble() {
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
}
