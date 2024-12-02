import Validators from './Validators.js';

class ValidateModules {
  static checkMonthAndDay(value) {
    const [monthString, dayName] = value.split(',');
    const month = Number(monthString);

    Validators.checkIsInteger(month);
    Validators.checkIsCorrectMonth(month);
    Validators.checkIsDayName(dayName);
  }

  static checkWorkers(value) {
    Validators.checkIsBlank(value);

    const workers = value.split(',');

    Validators.checkWorkerCount(workers);
    Validators.checkDuplicated(workers);

    workers.forEach((worker) => {
      Validators.checkNameLength(worker);
    });
  }
}

export default ValidateModules;
