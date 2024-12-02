import { DAY } from '../constant/month.js';

export const validateMonth = (monthInput) => {
  const month = Number(monthInput);

  if (Number.isNaN(month)) {
    throw new Error('[ERROR] 월은 숫자로 입력해야 합니다.');
  }

  if (month > 12 || month < 1) {
    throw new Error('[ERROR] 월은 1이상 12이하의 숫자로 입력해야 합니다.');
  }
};

const isEmpty = (input) => {
  if (input === '') {
    throw new Error('[ERROR] 공백은 입력할 수 없습니다.');
  }
};

export const validateDay = (dayInput) => {
  isEmpty(dayInput);

  if (!DAY.includes(dayInput)) {
    throw new Error('[ERROR] 올바른 요일을 입력해 주세요.');
  }
};
