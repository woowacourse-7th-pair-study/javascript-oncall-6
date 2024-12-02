class EmergencyDutyMachine {
  #weekdayStaff;
  #weekendStaff;
  #curWeekdayIndex;
  #curWeekendIndex;

  constructor(weekdayStaff, weekendStaff) {
    this.#weekdayStaff = weekdayStaff;
    this.#weekendStaff = weekendStaff;
    this.#curWeekdayIndex = 0;
    this.#curWeekendIndex = 0;
  }

  assignDutyStaff(isHoliday) {
    if (isHoliday) {
      const weekendDutyStaff = this.#weekendStaff[this.#curWeekendIndex];
      this.#curWeekendIndex += 1;
      return weekendDutyStaff;
    }

    const weekdayDutyStaff = this.#weekdayStaff[this.#curWeekdayIndex];
    this.#curWeekdayIndex += 1;
    return weekdayDutyStaff;
  }
}

export default EmergencyDutyMachine;
