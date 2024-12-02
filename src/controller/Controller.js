import InputHandler from "../inputHandler/InputHandler.js";
import Calendar from "../model/Calendar.js";
import Scheduler from "../model/Scheduler.js";
import OutputView from "../view/OutputView.js";
export default class Controller {
  constructor() {}

  async play() {
    const [month, startDay] = await InputHandler.monthAndStartDay();
    const weekdayOrder = await InputHandler.weekdayOrder();
    const holidayOrder = await InputHandler.holidayOrder();
    const calendar = new Calendar(month, startDay);
    const thisMonthCalendar = calendar.generateCalendar();
    const scheduler = new Scheduler(
      weekdayOrder,
      holidayOrder,
      thisMonthCalendar,
      month
    );
    const schedulerString = scheduler.toPrintString();
    OutputView.printScheduler(schedulerString);
  }
}
