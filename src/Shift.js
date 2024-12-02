import { ERROR_MESSAGE } from "./constant/message.js";
import { INPUT_SEPARATOR, SHIFT_LENGTH_RANGE, WORKER_NAME_LENGTH_RANGE } from "./constant/rule.js";
import { isDuplicate, isInRange, splitStringAndTrim } from "./util.js";

class Shift {
  #shift;

  constructor(input) {
    const names = splitStringAndTrim(input, INPUT_SEPARATOR);
    this.#validateNames(names);
    this.#shift = [...names];
  }

  #validateNames(names) {
    if (isDuplicate(names)) throw new Error(ERROR_MESSAGE.shiftNoDuplicate);
    if (!isInRange(names.length, SHIFT_LENGTH_RANGE.min, SHIFT_LENGTH_RANGE.max))
      throw new Error(ERROR_MESSAGE.shiftLengthNotInRange);

    names.forEach((name) => {
      if (!isInRange(name.length, WORKER_NAME_LENGTH_RANGE.min, WORKER_NAME_LENGTH_RANGE.max))
        throw new Error(ERROR_MESSAGE.workerNameLengthOverMax);
    });
  }

  getOnCallWorker() {
    return this.#shift[0];
  }

  getNextOnCallWorker() {
    return this.#shift[1];
  }

  onCall(workerName) {
    const workerNameIndex = this.#shift.indexOf(workerName);
    this.#shift.splice(workerNameIndex, 1);
    this.#shift.push(workerName);
  }
}

export default Shift;
