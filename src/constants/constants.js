export const ERROR_MESSAGE = '[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.';

export const DAYWEEK = [ '일', '월', '화', '수', '목', '금', '토' ];
export const WEEKDAY = [ '월', '화', '수', '목', '금' ];
export const WEEKEND = [ '토', '일' ];

export const INPUT_MESSAGES = Object.freeze({
  MONTH_AND_DAY: '비상 근무를 배정할 월과 시작 요일을 입력하세요> ',
  WEEKDAY: '평일 비상 근무 순번대로 사원 닉네임을 입력하세요> ',
  WEEKEND: '휴일 비상 근무 순번대로 사원 닉네임을 입력하세요> ',
});

// 각 월 별 법적 공휴일
export const HOLIDAY = Object.freeze({
  1: [ 1 ],
  3: [ 1 ],
  5: [ 5 ],
  6: [ 6 ],
  8: [ 15 ],
  10: [ 3, 9 ],
  12: [ 25 ],
});

// 각 월 별 마지막 요일
export const LAST_DAY = Object.freeze({
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
