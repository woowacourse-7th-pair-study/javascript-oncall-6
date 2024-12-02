import { ERROR_MESSAGE } from './constant/message.js';
import { SHIFT_LENGTH_RANGE } from './constant/rule.js';
import { isDuplicate, isInRange, splitStringAndTrim } from './util.js';

class Shift {
  #shift;

  constructor(input) {
    const names = splitStringAndTrim(input, ',');
    this.#validateNames(names);
  }

  #validateNames(names) {
    if (isDuplicate(names)) throw new Error(ERROR_MESSAGE.shiftNoDuplicate);
    if (
      !isInRange(names.length, SHIFT_LENGTH_RANGE.min, SHIFT_LENGTH_RANGE.max)
    )
      throw new Error(ERROR_MESSAGE.shiftLengthNotInRange);
  }
}

export default Shift;
