import { DAY } from '../constant/month.js';

export const validateMonth = (monthInput) => {
  const month = Number(monthInput);
  isInteger(month);

  if (Number.isNaN(month)) {
    throw new Error('[ERROR] 월은 숫자로 입력해야 합니다.');
  }

  if (month > 12 || month < 1) {
    throw new Error('[ERROR] 월은 1이상 12이하의 숫자로 입력해야 합니다.');
  }
};

const isInteger = (month) => {
  if (!Number.isInteger(month)) {
    throw new Error('[ERROR] 정수만 입력해 주세요.');
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

export const validateWeekOrder = (weekOrder) => {
  isWrongRange(weekOrder);
  isDuplicate(weekOrder);

  weekOrder.forEach((name) => {
    isEmpty(name);
    isWrongNameLength(name);
  });
};

const isWrongNameLength = (name) => {
  if (name.length > 5) {
    throw new Error('[ERROR] 근무자의 닉네임은 5자 이내로 입력해 주세요.');
  }
};

const isWrongRange = (orderArray) => {
  if (orderArray.length > 35 || orderArray.length < 5) {
    throw new Error('[ERROR] 근무자는 최소 5명 최대 35명을 입력해야 합니다.');
  }
};
const isDuplicate = (orderArray) => {
  if (orderArray.length !== new Set(orderArray).size) {
    throw new Error('[ERROR] 닉네임은 중복되지 않게 입력해 주세요.');
  }
};

export const validateWeekendOrder = (weekOrder, weekendOrder) => {
  isWrongRange(weekendOrder);
  isDuplicate(weekendOrder);
  isNotSame(weekOrder, weekendOrder);

  weekendOrder.forEach((name) => {
    isEmpty(name);
    isWrongNameLength(name);
  });
};

const isNotSame = (weekOrder, weekendOrder) => {
  const totalOrder = weekOrder.concat(weekendOrder);
  if (new Set(totalOrder).size !== weekendOrder.length) {
    throw new Error(
      '[ERROR] 평일, 주말 근무자의 명단은 같은 이름으로 구성되어야 합니다.',
    );
  }
};
