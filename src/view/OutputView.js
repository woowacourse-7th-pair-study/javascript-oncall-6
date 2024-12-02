import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printSchedule(calendar, month) {
    calendar.forEach((dayInfo) => {
      if (dayInfo.isHoliday && !dayInfo.isWeekend) {
        Console.print(
          `${month}월 ${dayInfo.date}일 ${dayInfo.day}(휴일) ${dayInfo.worker}`,
        );
        return;
      }
      Console.print(
        `${month}월 ${dayInfo.date}일 ${dayInfo.day} ${dayInfo.worker}`,
      );
    });
  },
};

export default OutputView;
