import WorkScheduler from '../Models/WorkScheduler.js';
import InputView from '../Views/InputView.js';
import OutputView from '../Views/OutputView.js';

class WorkScheduleController {
  static async run() {
    const { month, day } = await InputView.getMonthAndDay();
    const workerInfo = await InputView.getWeekDayAndHolidayWorkers();

    const workScheduler = new WorkScheduler(day, workerInfo);
    workScheduler.createWorkSchedule(month);

    OutputView.printWorkBoard(month, day, workScheduler.workSchedule);
  }
}

export default WorkScheduleController;
