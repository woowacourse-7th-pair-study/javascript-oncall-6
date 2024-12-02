import { ERROR_MESSAGE } from './constant/message.js';
import { SHIFT_LENGTH_RANGE, WORKER_NAME_LENGTH_MAX } from './constant/rule.js';
import { isDuplicate, isInRange, splitStringAndTrim } from './util.js';

class Shift {
  #shift;

  constructor(input) {
    const names = splitStringAndTrim(input, ',');
    this.#validateNames(names);
    this.#shift = [...names];
  }

  #validateNames(names) {
    if (isDuplicate(names)) throw new Error(ERROR_MESSAGE.shiftNoDuplicate);
    if (!isInRange(names.length, SHIFT_LENGTH_RANGE.min, SHIFT_LENGTH_RANGE.max))
      throw new Error(ERROR_MESSAGE.shiftLengthNotInRange);
    names.forEach((name) => {
      if (name.length > WORKER_NAME_LENGTH_MAX)
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
