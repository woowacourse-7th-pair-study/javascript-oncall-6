import Calendar from './model/Calendar.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

import tryInput from './util/tryInput.js';
import {
  validateDay,
  validateMonth,
  validateWeekOrder,
  validateWeekendOrder,
} from './util/validator.js';

class App {
  async run() {
    const [month, day] = await tryInput(() => this.#getMonthAndDay());
    const [weekOrder, weekendOrder] = await tryInput(() =>
      this.#getWorkOrder(),
    );
    const calendar = this.#setCalendar(month, day);
    this.#setSchedule(weekOrder, weekendOrder, calendar);
    OutputView.printSchedule(calendar.getCalendar(), month);
  }

  async #getMonthAndDay() {
    const [month, day] = await InputView.readMonthAndDay();

    validateMonth(month);
    validateDay(day);

    return [Number(month), day];
  }

  async #getWorkOrder() {
    const weekOrder = await InputView.readWeekdayOrder();
    validateWeekOrder(weekOrder);

    const weekendOrder = await InputView.readWeekendOrder();
    validateWeekendOrder(weekOrder, weekendOrder);

    return [weekOrder, weekendOrder];
  }

  #setCalendar(month, day) {
    return new Calendar(Number(month), day);
  }

  #setSchedule(weekOrder, weekendOrder, calendar) {
    calendar.setSchedule(weekOrder, weekendOrder);
  }
}

export default App;
const app = new App();

app.run();
