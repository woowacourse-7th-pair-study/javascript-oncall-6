import View from './View.js';
import WorkMonth from './WorkMonth.js';

class App {
  #workMonth;
  async run() {
    await this.#getStartInfo();

    const normalDayInput = await View.inputNormalDayShift();
    const dayOffInput = await View.inputDayOffShift();
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
}

export default App;
