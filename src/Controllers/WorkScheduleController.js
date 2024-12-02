import WorkScheduler from '../Models/WorkScheduler.js';
import InputView from '../Views/InputView.js';
import OutputView from '../Views/OutputView.js';

class WorkScheduleController {
  static async run() {
    const { month, day } = await InputView.getMonthAndDay();
    const workerInfo = await InputView.getWeekDayAndHolidayWorkers();

    const workderSchedule = WorkScheduler.createWorkSchedule(month, day, workerInfo);

    OutputView.printWorkBoard(month, day, workderSchedule);
  }
}

export default WorkScheduleController;
