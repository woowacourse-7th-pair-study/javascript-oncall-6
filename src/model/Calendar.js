import { HOLIDAYS, WEEKDAY } from "../Constant";
export default class Calendar {
  #month;
  #startDay;
  #calendar = [];
  constructor(month, startDay) {
    //숫자
    this.#month = month;
    //string
    this.#startDay = startDay;
    this.#calendar = this.generateCalendar();
  }
  get calendar() {
    return this.#calendar;
  }
  getEndDate(month) {
    if (month === 2) return 28;
    //홀수달
    if (month % 2 === 1) return 31;
    //짝수달
    return 30;
  }
  generateCalendar() {
    const calendar = [];
    //객채 요소를 배열로 저장 {day : 요일(문자),  isPublicHoliday : false } worker는 나중에 추가
    for (let i = 1; i <= this.getEndDate(this.#month); i++) {
      let day = this.getDay(i);
      let isPublicHoliday = this.isPublicHoliday(i);
      calendar.push({ day, isPublicHoliday });
    }
    return calendar;
  }
  //일(숫자)를 입력받음
  isPublicHoliday(date) {
    if (!HOLIDAYS[this.#month]) return false;
    if (HOLIDAYS[this.#month] === date) return true;
    return false;
  }
  getDay(date) {
    //시작 dayIndex
    const startIndex = WEEKDAY.indexOf(this.#startDay);
    const currentIndex = (startIndex + date - 1) % 7;
    return WEEKDAY[currentIndex];
  }
}
