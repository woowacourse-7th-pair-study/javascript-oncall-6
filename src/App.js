import View from "./View.js";
import WorkSheet from "./WorkSheet.js";
import Shift from "./Shift.js";

class App {
  #workSheet;
  #normalDayShift;
  #dayOffShift;

  async run() {
    await this.#getStartInfo();

    await this.#getShift();

    this.#workSheet.assignWorkers(this.#normalDayShift, this.#dayOffShift);

    const result = this.#workSheet.getWorkSheetForPrint();
    View.printMessage(result);
  }

  async #getStartInfo() {
    try {
      const startInput = await View.inputStart();
      this.#workSheet = new WorkSheet(startInput);
    } catch (error) {
      View.printMessage(error.message);
      return await this.#getStartInfo();
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
      return await this.#getShift();
    }
  }
}

export default App;
