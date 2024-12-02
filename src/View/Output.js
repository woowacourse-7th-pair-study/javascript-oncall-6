import { Console } from '@woowacourse/mission-utils';

class Output {
  static printEmergencyDutySchedule(schedule) {
    schedule.forEach(({ month, date, days, staff, isPrintHolidayString }) => {
      Console.print(
        `${month}월 ${date}일 ${days}${isPrintHolidayString ? '(휴일)' : ''} ${staff}`,
      );
    });
  }
}

export default Output;
