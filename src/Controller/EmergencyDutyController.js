import { Console } from '@woowacourse/mission-utils';
import Input from '../View/Input.js';

class EmergencyDutyController {
  constructor() {}

  async init() {
    const startMonthAndDay = await Input.getStartMonthAndDay()((input) => {
      const parsedStartMonthAndDay = input.split(',');
      return parsedStartMonthAndDay;
    });

    Console.print(startMonthAndDay);
  }
}

export default EmergencyDutyController;
