import { ERROR_MESSAGE } from '../constants/constants.js';

const isDuplicate = (employees) => {
  const employeesSet = new Set(employees);
  return employees.length !== employeesSet.size;
}

const isNameLength = (employees) => {
  const minNameLength = 1;
  const maxNameLength = 5;
  const isOverLength = (name) => name.length < minNameLength || name.length > maxNameLength;
  return employees.some(isOverLength);
}

const isRange = (employees) => {
  const minNumOfEmployees = 5;
  const maxNumOfEmployees = 35;
  return employees.length < minNumOfEmployees || employees.length > maxNumOfEmployees;
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
