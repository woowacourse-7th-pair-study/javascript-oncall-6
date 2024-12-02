import { Console } from '@woowacourse/mission-utils';
import { HOLIDAY_INFO, MONTH_DAYS, WEEK_NAME } from '../constants.js';

class OutputView {
  static printWorkBoard(month, dayNumber, workers) {
    let curWeekNameIndex = WEEK_NAME.indexOf(dayNumber);

    for (let curDay = 1; curDay <= MONTH_DAYS[month]; curDay += 1) {
      if (HOLIDAY_INFO[month].includes(curDay)) {
        Console.print(
          `${month}월 ${curDay}일 ${WEEK_NAME[curWeekNameIndex]}(휴일) ${workers[curDay]}`,
        );
      } else {
        Console.print(`${month}월 ${curDay}일 ${WEEK_NAME[curWeekNameIndex]} ${workers[curDay]}`);
      }

      curWeekNameIndex = (curWeekNameIndex + 1) % WEEK_NAME.length;
    }
  }
}

export default OutputView;
