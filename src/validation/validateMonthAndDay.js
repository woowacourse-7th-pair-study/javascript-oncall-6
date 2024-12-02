import { ERROR_MESSAGE, DAYWEEK } from '../constants/constants.js';
import parser from '../utils/parser.js';

const isValidLenth = (monthAndDay) => {
  return monthAndDay.length !== 2;
}

const isNumber = (month) => {
  return isNaN(month);
}

const isMonthRange = (month) => {
  return month < 1 || month > 12;
}

const isDayRange = (day) => {
  return !DAYWEEK.includes(day)
}

/**
 * 월과 요일 유효성 검증하여 반환
 * @param {Array<string>} monthAndDay 
 * @returns {{ month: number, startDay: string }}
 */
const validateMonthAndDay = (monthAndDay) => {
  if (
    isValidLenth(monthAndDay)
    || isNumber(monthAndDay[0])
    || isMonthRange(monthAndDay[0])
    || isDayRange(monthAndDay[1])
  ) {
    throw new Error(ERROR_MESSAGE);
  }
  return { month: parser.stringToNumber(monthAndDay[0]), startDay: monthAndDay[1] };
}

export default validateMonthAndDay;
