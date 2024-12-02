class EmergencyDutyMachine {
  #weekdayStaff;
  #weekendStaff;
  #curWeekdayIndex;
  #curWeekendIndex;
  #prevDutyStaff;

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
      if (this.#curWeekendIndex === this.#weekendStaff.length)
        this.#curWeekendIndex = 0;
      this.#prevDutyStaff = weekendDutyStaff;
      return weekendDutyStaff;
    }

    const weekdayDutyStaff = this.#weekdayStaff[this.#curWeekdayIndex];
    this.#curWeekdayIndex += 1;
    if (this.#curWeekdayIndex === this.#weekdayStaff.length)
      this.#curWeekdayIndex = 0;
    this.#prevDutyStaff = weekdayDutyStaff;
    return weekdayDutyStaff;
  }
}

export default EmergencyDutyMachine;
