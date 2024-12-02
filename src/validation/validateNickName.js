import { ERROR_MESSAGE } from '../constants/constants.js';

const isDuplicate = (employees) => {
  const employeesSet = new Set(employees);
  return employees.length !== employeesSet.size;
}

const isNameLength = (employees) => {
  return employees.forEach((name) => {
    name.length < 1 || name.length > 5;
  });
}

const isRange = (employees) => {
  return employees.length < 5 || employees.length > 35;
}

/**
 * 사원 닉네임에 대한 유효성 검증
 * @param {Array<string>} employees 
 */
const validateNickName = (employees) => {
  if (
    isDuplicate(employees)
    || isNameLength(employees)
    || isRange(employees)
  ) {
    throw new Error(ERROR_MESSAGE);
  }
}

export default validateNickName;
