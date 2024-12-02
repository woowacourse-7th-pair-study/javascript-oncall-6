import EmergencyDutyController from './Controller/EmergencyDutyController.js';

class App {
  async run() {
    const controller = new EmergencyDutyController();

    await controller.init();
  }
}

export default App;
