export const SERVICE_CONSTANTS = Object.freeze({
  workerNameLengthLimit: 5,
  maximumWorker: 35,
  minimumWorker: 5,
  monthStart: 1,
  monthEnd: 12,
});

export const ERROR_MESSAGE = Object.freeze({
  errorPrefix: '[ERROR]',
  notAInteger: '정수가 아닌 값이 포함되어 있습니다.',
  notAMonth: '잘못된 월이 입력되었습니다.',
  wrongWeekName: '잘못된 요일이 입력되었습니다.',
  exceedNameLength: `근무자 이름이 너무 길거나 짧습니다. (${SERVICE_CONSTANTS.workerNameLengthLimit}자 이하)`,
  exceedWorkerCount: `근무자가 너무 많거나 적습니다. (${SERVICE_CONSTANTS.minimumWorker}명 이상, ${SERVICE_CONSTANTS.maximumWorker}명 이하)`,
  duplicatedWorkerName: '근무자 중 중복된 이름이 입력되었습니다.',
  emptyValue: '아무 값도 입력되지 않았습니다.',
});

export const WEEK_NAME = Object.freeze(['월', '화', '수', '목', '금', '토', '일']);

export const MONTH_DAYS = Object.freeze({
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
});

export const HOLIDAY_INFO = Object.freeze({
  1: [1],
  2: [],
  3: [1],
  4: [],
  5: [5],
  6: [6],
  7: [],
  8: [15],
  9: [],
  10: [3, 9],
  11: [],
  12: [25],
});
