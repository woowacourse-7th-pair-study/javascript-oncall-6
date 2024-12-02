import {
  validateDay,
  validateMonth,
  validateWeekOrder,
  validateWeekendOrder,
} from '../src/util/validator.js';

describe('validator 테스트', () => {
  describe('validateDay 테스트', () => {
    test.each([
      ['공백이 입력된 경우', ''],
      ['월~금이 아닌 값이 입력된 경우', '퇴'],
    ])('%s', (_, input) => {
      expect(() => {
        validateDay(input);
      }).toThrow();
    });
  });

  describe('validateMonth 테스트', () => {
    test.each([
      ['공백이 입력된 경우', ''],
      ['1~12이 아닌 값이 입력된 경우', '13'],
      ['정수가 아닌 값이 입력된 경우', '11.1'],
      ['숫자가 아닌 값이 입력된 경우', 'ㅁㅁㅁ'],
    ])('%s', (_, input) => {
      expect(() => {
        validateMonth(input);
      }).toThrow();
    });
  });

  describe('validateWeekOrder 테스트', () => {
    test.each([
      ['5명 미만으로 입력한 경우', ['명석']],
      ['중복된 이름이 있는 경우', ['명석', '명석', '지예', '상우', '다은']],
      ['이름이 5자 초과인 경우', ['명석1234', '명석', '지예', '상우', '다은']],
      ['이름에 공백이 있는 경우', ['명석1234', '명석', '지예', '상우', '']],
    ])('%s', (_, input) => {
      expect(() => {
        validateWeekOrder(input);
      }).toThrow();
    });
  });

  describe('validateWeekendOrder 테스트', () => {
    test.each([
      ['5명 미만으로 입력한 경우', ['명석']],
      [
        '평일 근무자와 이름이 다른 경우',
        ['명석', '다은', '지예', '상우', '수연'],
      ],
    ])('%s', (_, input) => {
      const weekOrder = ['명석', '재영', '지예', '상우', '다은'];
      expect(() => {
        validateWeekendOrder(weekOrder, input);
      }).toThrow();
    });
  });
});
