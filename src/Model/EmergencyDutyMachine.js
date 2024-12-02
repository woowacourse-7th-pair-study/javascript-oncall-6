class EmergencyDutyMachine {
  #weekdayStaff;
  #weekendStaff;
  #staffLength;
  #curWeekdayStaffOrder;
  #curWeekendStaffOrder;
  #curWeekdayIndex;
  #curWeekendIndex;
  #prevDutyStaff;

  constructor(weekdayStaff, weekendStaff) {
    this.#weekdayStaff = [...weekdayStaff];
    this.#weekendStaff = [...weekendStaff];
    this.#staffLength = weekdayStaff.length;
    this.#curWeekdayStaffOrder = [...weekdayStaff];
    this.#curWeekendStaffOrder = [...weekendStaff];
    this.#curWeekdayIndex = 0;
    this.#curWeekendIndex = 0;
  }

  assignDutyStaff(isHoliday) {
    if (isHoliday) {
      return this.#getHolidayStaff();
    }

    return this.#getNonHolidayStaff();
  }

  #getHolidayStaff() {
    let weekendDutyStaff = this.#curWeekendStaffOrder[this.#curWeekendIndex];
    if (weekendDutyStaff === this.#prevDutyStaff) {
      this.#curWeekendStaffOrder = this.#switchOrder(
        this.#curWeekendStaffOrder,
        this.#curWeekendIndex,
      );
      weekendDutyStaff = this.#curWeekendStaffOrder[this.#curWeekendIndex];
    }
    this.#curWeekendIndex = this.#updateIndex(true);
    this.#curWeekendStaffOrder = this.#updateOrder(true);

    this.#prevDutyStaff = weekendDutyStaff;
    return weekendDutyStaff;
  }

  #getNonHolidayStaff() {
    let weekdayDutyStaff = this.#curWeekdayStaffOrder[this.#curWeekdayIndex];
    if (weekdayDutyStaff === this.#prevDutyStaff) {
      this.#curWeekdayStaffOrder = this.#switchOrder(
        this.#curWeekdayStaffOrder,
        this.#curWeekdayIndex,
      );
      weekdayDutyStaff = this.#curWeekdayStaffOrder[this.#curWeekdayIndex];
    }
    this.#curWeekdayIndex = this.#updateIndex(false);
    this.#curWeekdayStaffOrder = this.#updateOrder(false);

    this.#prevDutyStaff = weekdayDutyStaff;
    return weekdayDutyStaff;
  }

  #switchOrder(order, index) {
    const copyOrder = [...order];
    [copyOrder[index], copyOrder[index + 1]] = [
      copyOrder[index + 1],
      copyOrder[index],
    ];

    return copyOrder;
  }

  #updateIndex(isHoliday) {
    let nextIndex;
    if (isHoliday) {
      nextIndex = this.#curWeekendIndex + 1;
    } else {
      nextIndex = this.#curWeekdayIndex + 1;
    }

    if (nextIndex === this.#staffLength) return 0;
    return nextIndex;
  }

  #updateOrder(isHoliday) {
    if (isHoliday) {
      if (this.#curWeekendIndex === 0) return [...this.#weekendStaff];
      return this.#curWeekendStaffOrder;
    }
    if (this.#curWeekdayIndex === 0) return [...this.#weekdayStaff];
    return this.#curWeekdayStaffOrder;
  }
}

export default EmergencyDutyMachine;
