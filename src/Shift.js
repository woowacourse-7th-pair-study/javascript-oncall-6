import { ERROR_MESSAGE } from './constant/message.js';
import { isDuplicate, splitStringAndTrim } from './util.js';

class Shift {
  #shift;

  constructor(input) {
    const names = splitStringAndTrim(input, ',');
    this.#validateNames(names);
  }

  #validateNames(names) {
    if (isDuplicate(names)) throw new Error(ERROR_MESSAGE.shiftNoDuplicate);
  }
}

export default Shift;
