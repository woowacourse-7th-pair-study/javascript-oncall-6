import WorkScheduleController from './Controllers/WorkScheduleController.js';

class App {
  async run() {
    await WorkScheduleController.run();
  }
}

export default App;
