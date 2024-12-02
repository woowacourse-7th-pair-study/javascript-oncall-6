import { ERROR_MESSAGE, SERVICE_CONSTANTS } from '../constants';
import errorHandler from './ErrorHandler';

class Validators {
  static checkIsNumber(value) {
    errorHandler(Number.isNaN(value), ERROR_MESSAGE.notANumber);
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

  static checkNameLength(value) {
    errorHandler(
      0 == value.length || value.length > workerNameLengthLimit,
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
