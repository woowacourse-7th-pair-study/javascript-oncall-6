import { ERROR_MESSAGE, SERVICE_CONSTANTS, WEEK_NAME } from '../constants.js';
import errorHandler from './ErrorHandler.js';

class Validators {
  static checkIsInteger(value) {
    errorHandler(!Number.isInteger(value), ERROR_MESSAGE.notAInteger);
  }

  static checkIsCorrectMonth(value) {
    errorHandler(
      value < SERVICE_CONSTANTS.monthStart || value > SERVICE_CONSTANTS.monthEnd,
      ERROR_MESSAGE.notAMonth,
    );
  }

  static checkIsDayName(value) {
    errorHandler(!WEEK_NAME.includes(value), ERROR_MESSAGE.wrongWeekName);
  }

  static checkDuplicated(value) {
    errorHandler(new Set(value).size != value.length, ERROR_MESSAGE.duplicatedWorkerName);
  }

  static checkIsBlank(value) {
    errorHandler(value === '', ERROR_MESSAGE.emptyValue);
  }
  static checkNameLength(value) {
    errorHandler(
      0 == value.length || value.length > SERVICE_CONSTANTS.workerNameLengthLimit,
      ERROR_MESSAGE.exceedNameLength,
    );
  }

  static checkWorkerCount(value) {
    errorHandler(
      value.length < SERVICE_CONSTANTS.minimumWorker ||
        value.length > SERVICE_CONSTANTS.maximumWorker,
      ERROR_MESSAGE.exceedWorkerCount,
    );
  }
}

export default Validators;
