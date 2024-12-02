import View from './View.js';
import WorkMonth from './WorkMonth.js';
import Shift from './Shift.js';

class App {
  #workMonth;
  #normalDayShift;
  #dayOffShift;

  async run() {
    await this.#getStartInfo();
    await this.#getShift();

    this.#workMonth.assignWorkers(this.#normalDayShift, this.#dayOffShift);
  }

  async #getStartInfo() {
    try {
      const startInput = await View.inputStart();
      this.#workMonth = new WorkMonth(startInput);
    } catch (error) {
      View.printMessage(error.message);
      await this.#getStartInfo();
    }
  }

  async #getShift() {
    try {
      const normalDayInput = await View.inputNormalDayShift();
      this.#normalDayShift = new Shift(normalDayInput);

      const dayOffInput = await View.inputDayOffShift();
      this.#dayOffShift = new Shift(dayOffInput);
    } catch (error) {
      View.printMessage(error.message);
      await this.#getShift();
    }
  }
}

export default App;
