import { repeatUtilComplete } from '../util/input.js';

class Input {
  static getStartMonthAndDay() {
    return repeatUtilComplete(
      '비상 근무를 배정할 월과 시작 요일을 입력하세요> ',
    );
  }

  static getWeekdayStaffInput() {
    return repeatUtilComplete(
      '평일 비상 근무 순번대로 사원 닉네임을 입력하세요> ',
    );
  }

  static getWeekendStaffInput() {
    return repeatUtilComplete(
      '휴일 비상 근무 순번대로 사원 닉네임을 입력하세요> ',
    );
  }
}

export default Input;
