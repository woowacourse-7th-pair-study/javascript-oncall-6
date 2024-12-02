import { HOLIDAY, LAST_DAY, DAYWEEK, WEEKDAY, WEEKEND } from '../constants/constants.js';

class AssignWorkDay {
  /** @type {Array<{ month: number, day: number, dayWeek: string, name: string }>} */ #schedule = [];

  getSchedule() {
    return this.#schedule;
  }

  /**
   * 입력한 순번대로 비상 근무일을 배정한다.
   * @param {number} month 1 ~ 12
   * @param {string} startDay 월 ~ 일 
   * @param {Array<string>} weekDayEmployees [ '누구', '누구', ... ]
   * @param {Array<string>} weekEndEmployees [ '누구', '누구', ... ]
   */
  assign(month, startDay, weekDayEmployees, weekEndEmployees) {
    let curDayWeekIdx = DAYWEEK.indexOf(startDay); // 현재 요일 인덱스
    let weekDayEmployeesArray = weekDayEmployees; // 평일 순번 새 배열 생성
    let weekEndEmployeesArray = weekEndEmployees; // 휴일 순번 새 배열 생성

    for (let curDay = 1; curDay <= LAST_DAY[month]; curDay++) {
      let name = '';

      // 휴일 | 공휴일
      if (
        WEEKEND.includes(DAYWEEK[curDayWeekIdx])
        || (HOLIDAY[month] && HOLIDAY[month].includes(curDay))
      ) {
        name = weekEndEmployeesArray.shift();
        if (this.#schedule.length > 0 && this.#schedule[this.#schedule.length - 1].name === name) {
          let nextEmployeeName = weekEndEmployeesArray.shift(); // 다음 사원 이름 추출
          weekEndEmployeesArray.unshift(name); // 현재 name 다시 앞에 넣기
          name = nextEmployeeName; // 다음 사원을 name에 넣기
        }
        weekEndEmployeesArray.push(name); // name 을 다시 배열 맨 뒤에 삽입
      }

      // 평일
      else if (WEEKDAY.includes(DAYWEEK[curDayWeekIdx])) {
        name = weekDayEmployeesArray.shift();
        if (this.#schedule.length > 0 && this.#schedule[this.#schedule.length - 1].name === name) {
          let nextEmployeeName = weekDayEmployeesArray.shift(); // 다음 사원 이름 추출
          weekDayEmployeesArray.unshift(name); // 현재 name 다시 앞에 넣기
          name = nextEmployeeName; // 다음 사원을 name에 넣기
        }
        weekDayEmployeesArray.push(name); // name 을 다시 배열 맨 뒤에 삽입
      }

      // 근무 일정 추가
      this.#schedule.push({ month, day: curDay, dayWeek: DAYWEEK[curDayWeekIdx], name });

      // 다음 요일로 업데이트
      curDayWeekIdx += 1;
      if (curDayWeekIdx >= DAYWEEK.length) curDayWeekIdx = 0;
    }
  }
}

export default AssignWorkDay;
