import { ERROR_MESSAGE } from '../src/constant/error.js';
import { INPUT_SEPARATOR } from '../src/constant/seperator.js';
import { parseInputWithSeparator } from '../src/parser/parseInput.js';
import { validateMonthAndDayInput } from '../src/validator/validateMonthInput.js';
import { validateWeekdayStaffInput } from '../src/validator/validateWeekdayStaffInput.js';
import { validateWeekendStaffInput } from '../src/validator/validateWeekendStaffInput.js';

const inputMonthAndDaysTestCases = [
  {
    description: '잘못된 시작 월, 요일 정보 입력',
    inputs: '1,월,수',
    expectedErrorMessage: ERROR_MESSAGE.invalidInput,
  },
  {
    description: '입력 받은 월이 숫자가 아닐 경우',
    inputs: 'a,월',
    expectedErrorMessage: ERROR_MESSAGE.notNumberMonthInput,
  },
  {
    description: '입력 받은 월이 정수가 아닐 경우',
    inputs: '1.2,월',
    expectedErrorMessage: ERROR_MESSAGE.notIntegerMonthInput,
  },
  {
    description: '입력 받은 월이 1 ~ 12 사이가 아닐 경우',
    inputs: '14,월',
    expectedErrorMessage: ERROR_MESSAGE.notInRangeMonthInput,
  },
  {
    description: '입력 받은 요일의 정보가 잘못되었을 경우',
    inputs: '4,월~',
    expectedErrorMessage: ERROR_MESSAGE.invalidDaysInput,
  },
];

const inputWeekdayStaffTestCases = [
  {
    description: '입력된 평일 근무자 수가 5 ~ 35명 사이가 아닐 경우',
    inputs: '강강,낭낭,당당,랑랑',
    expectedErrorMessage: ERROR_MESSAGE.notInRangeStaffCount,
  },
  {
    description: '입력된 평일 근무자에 중복된 이름이 있을 경우',
    inputs: '강강,낭낭,당당,랑랑,강강',
    expectedErrorMessage: ERROR_MESSAGE.duplicateStaffName,
  },
  {
    description: '입력된 평일 근무자의 이름이 1 ~ 5자 사이가 아닐 경우',
    inputs: '강강,낭낭,당당,랑랑,강강강강강강강강',
    expectedErrorMessage: ERROR_MESSAGE.notInRangeStaffNameLength,
  },
  {
    description: '입력된 평일 근무자의 이름이 1 ~ 5자 사이가 아닐 경우',
    inputs: '강강,낭낭,당당,랑랑,',
    expectedErrorMessage: ERROR_MESSAGE.notInRangeStaffNameLength,
  },
];

const inputWeekendStaffTestCases = [
  {
    description: '입력된 휴일 근무자에 중복된 이름이 있을 경우',
    inputs: '강강,낭낭,당당,랑랑,강강',
    expectedErrorMessage: ERROR_MESSAGE.duplicateStaffName,
  },
  {
    description: '입력된 휴일 근무자가 평일 근무자와 다를 경우',
    inputs: '강강,낭낭,당당,랑랑,장장',
    expectedErrorMessage: ERROR_MESSAGE.differentStaffList,
  },
  {
    description: '입력된 평일 근무자의 이름이 1 ~ 5자 사이가 아닐 경우',
    inputs: '강강,낭낭,당당,랑랑,강강강강강강강강',
    expectedErrorMessage: ERROR_MESSAGE.notInRangeStaffNameLength,
  },
  {
    description: '입력된 평일 근무자의 이름이 1 ~ 5자 사이가 아닐 경우',
    inputs: '강강,낭낭,당당,랑랑,',
    expectedErrorMessage: ERROR_MESSAGE.notInRangeStaffNameLength,
  },
];

describe('입력 예외 처리 테스트', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  test.each(inputMonthAndDaysTestCases)(
    '$description',
    async ({ inputs, expectedErrorMessage }) => {
      expect(() => {
        const parsedInput = parseInputWithSeparator(inputs, INPUT_SEPARATOR);
        validateMonthAndDayInput(parsedInput);
      }).toThrow(`[ERROR] ${expectedErrorMessage} 다시 입력해주세요.`);
    },
  );

  test.each(inputWeekdayStaffTestCases)(
    '$description',
    async ({ inputs, expectedErrorMessage }) => {
      expect(() => {
        const parsedInput = parseInputWithSeparator(inputs, INPUT_SEPARATOR);
        validateWeekdayStaffInput(parsedInput);
      }).toThrow(`[ERROR] ${expectedErrorMessage} 다시 입력해주세요.`);
    },
  );

  test.each(inputWeekendStaffTestCases)(
    '$description',
    async ({ inputs, expectedErrorMessage }) => {
      const weekdayStaff = ['강강', '낭낭', '당당', '랑랑', '망망'];
      expect(() => {
        const parsedInput = parseInputWithSeparator(inputs, INPUT_SEPARATOR);
        validateWeekendStaffInput(parsedInput, weekdayStaff);
      }).toThrow(`[ERROR] ${expectedErrorMessage} 다시 입력해주세요.`);
    },
  );
});
