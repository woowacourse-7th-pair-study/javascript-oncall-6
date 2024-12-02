import EmergencyDutyController from './Controller/\bEmergencyDutyController.js';

class App {
  async run() {
    const controller = new EmergencyDutyController();

    await controller.init();
  }
}

export default App;
