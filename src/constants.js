export const ERROR_MESSAGE = Object.freeze({
  errorPrefix: '[ERROR]',
  notANumber: '숫자가 아닌 값이 포함되어 있습니다.',
  notAMonth: '잘못된 월이 입력되었습니다.',
  wrongWeekName: '잘못된 요일이 입력되었습니다.',
  exceedNameLength: `근무자 이름이 너무 길거나 짧습니다. (${SERVICE_CONSTANTS.workerNameLengthLimit}자 이하)`,
  exceedWorkerCount: `근무자가 너무 많거나 적습니다. (${SERVICE_CONSTANTS.minimumWorker}명 이상, ${SERVICE_CONSTANTS.maximumWorker}명 이하)`,
});

export const WEEK_NAME = Object.freeze(['월', '화', '수', '목', '금', '토', '일']);

export const SERVICE_CONSTANTS = Object.freeze({
  workerNameLengthLimit: 5,
  maximumWorker: 35,
  minimumWorker: 5,
  monthStart: 1,
  monthEnd: 12,
});
