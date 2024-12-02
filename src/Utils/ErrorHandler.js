import { ERROR_MESSAGE } from '../constants.js';

const errorHandler = (condition, message) => {
  if (condition) {
    throw new Error(`${ERROR_MESSAGE.errorPrefix} ${message}`);
  }
};

export default errorHandler;
