import Validators from './Validators.js';

class ValidateModules {
  static checkMonthAndDay(value) {
    const [monthString, dayName] = value.split(',');
    const month = Number(monthString);

    Validators.checkIsNumber(month);
    Validators.checkIsCorrectMonth(month);
    Validators.checkIsDayName(dayName);
  }

  static checkWorkers(value) {
    const workers = value.split(',');

    Validators.checkWorkerCount(value);
    Validators.checkDuplicated(value);

    workers.forEach((worker) => {
      Validators.checkNameLength(worker);
    });
  }
}

export default ValidateModules;
