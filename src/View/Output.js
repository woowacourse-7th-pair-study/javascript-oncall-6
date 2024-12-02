import { Console } from '@woowacourse/mission-utils';

class Output {
  static printEmergencyDutySchedule(schedule) {
    schedule.forEach(({ month, date, days, staff }) => {
      Console.print(`${month}월 ${date}일 ${days} ${staff}`);
    });
  }
}

export default Output;
