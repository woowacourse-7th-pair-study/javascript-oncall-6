import { ERROR_MESSAGE } from '../constants';

const errorHandler = (condition, message) => {
  if (condition) {
    throw new Error(`${ERROR_MESSAGE.errorPrefix} ${message}`);
  }
};

export default errorHandler;
