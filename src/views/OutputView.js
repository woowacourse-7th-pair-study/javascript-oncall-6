import { Console } from '@woowacourse/mission-utils';
import { HOLIDAY } from '../constants/constants.js';

const OutputView = {
  /**
   * 비상 근무표를 출력한다.
   * @param {Array<{ month: number, day: number, dayWeek: string, name: string }>} schedule 
   */
  printSchedule(schedule) {
    schedule.forEach((byDay) => {
      let holiday = '';
      if (HOLIDAY[byDay.month] && HOLIDAY[byDay.month].includes(byDay.day)) holiday = '(휴일)';
      Console.print(`${byDay.month}월 ${byDay.day}일 ${byDay.dayWeek}${holiday} ${byDay.name}`);
    });
  },

  /**
   * 에러 메시지와 함께 에러를 던진다.
   * @param {string} errorMessage 
   */
  printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  },
}

export default OutputView;
