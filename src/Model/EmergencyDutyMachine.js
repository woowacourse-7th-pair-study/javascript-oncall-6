class EmergencyDutyMachine {
  #weekdayStaff;
  #weekendStaff;
  #curWeekdayStaffOrder;
  #curWeekendStaffOrder;
  #curWeekdayIndex;
  #curWeekendIndex;
  #prevDutyStaff;

  constructor(weekdayStaff, weekendStaff) {
    this.#weekdayStaff = [...weekdayStaff];
    this.#weekendStaff = [...weekendStaff];
    this.#curWeekdayStaffOrder = [...weekdayStaff];
    this.#curWeekendStaffOrder = [...weekendStaff];
    this.#curWeekdayIndex = 0;
    this.#curWeekendIndex = 0;
  }

  assignDutyStaff(isHoliday) {
    if (isHoliday) {
      let weekendDutyStaff = this.#curWeekendStaffOrder[this.#curWeekendIndex];
      if (weekendDutyStaff === this.#prevDutyStaff) {
        [
          this.#curWeekendStaffOrder[this.#curWeekendIndex],
          this.#curWeekendStaffOrder[this.#curWeekendIndex + 1],
        ] = [
          this.#curWeekendStaffOrder[this.#curWeekendIndex + 1],
          this.#curWeekendStaffOrder[this.#curWeekendIndex],
        ];
        weekendDutyStaff = this.#curWeekendStaffOrder[this.#curWeekendIndex];
      }
      this.#curWeekendIndex += 1;
      if (this.#curWeekendIndex === this.#curWeekendStaffOrder.length) {
        this.#curWeekendIndex = 0;
        this.#curWeekendStaffOrder = [...this.#weekendStaff];
      }

      this.#prevDutyStaff = weekendDutyStaff;
      return weekendDutyStaff;
    }

    let weekdayDutyStaff = this.#curWeekdayStaffOrder[this.#curWeekdayIndex];
    if (weekdayDutyStaff === this.#prevDutyStaff) {
      [
        this.#curWeekdayStaffOrder[this.#curWeekdayIndex],
        this.#curWeekdayStaffOrder[this.#curWeekdayIndex + 1],
      ] = [
        this.#curWeekdayStaffOrder[this.#curWeekdayIndex + 1],
        this.#curWeekdayStaffOrder[this.#curWeekdayIndex],
      ];
      weekdayDutyStaff = this.#curWeekdayStaffOrder[this.#curWeekdayIndex];
    }
    this.#curWeekdayIndex += 1;
    if (this.#curWeekdayIndex === this.#curWeekdayStaffOrder.length) {
      this.#curWeekdayIndex = 0;
      this.#curWeekdayStaffOrder = [...this.#weekdayStaff];
    }

    this.#prevDutyStaff = weekdayDutyStaff;
    return weekdayDutyStaff;
  }
}

export default EmergencyDutyMachine;
