import { Console } from '@woowacourse/mission-utils';
import Input from '../View/Input.js';

class EmergencyDutyController {
  constructor() {}

  async init() {
    const startMonthAndDay = await Input.getStartMonthAndDay()(
      (input) => input,
    );

    Console.print(startMonthAndDay);
  }
}

export default EmergencyDutyController;
