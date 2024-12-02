import validateMonthAndDay from '../src/validation/validateMonthAndDay.js';
import { ERROR_MESSAGE } from '../src/constants/constants.js';
import parser from '../src/utils/parser.js';

describe('validateMonthAndDay 메서드 테스트', () => {
  test.each([
    // given
    [ 'isNumber: month가 숫자가 아닌 경우', '숫자아님, 월' ],
    [ 'isMonthRange: month가 1 ~ 12 사이가 아닌 경우', '0, 월' ],
    [ 'isMonthRange: month가 1 ~ 12 사이가 아닌 경우', '13, 월' ],
    [ `isDayRange: day가 [ '일', '월', '화', '수', '목', '금', '토' ]가 경우`, '10, 요일아님' ],
  ])('%s', (_, monthAndDay) => {
    // given
    const parsedMonthAndDay = parser.deleteEmptyValue(parser.stringToArray(monthAndDay));

    // when & then
    expect(() => {
      validateMonthAndDay(parsedMonthAndDay);
    }).toThrow(ERROR_MESSAGE);
  });

  test.each([
    // given
    [ '기본 케이스 (1)', '1,월' ],
    [ '기본 케이스 (2)', '12,토' ],
    [ '띄어쓰기 있는 경우', ' 2 , 화 ' ],
  ])('%s', (_, monthAndDay) => {
    // given
    const parsedMonthAndDay = parser.deleteEmptyValue(parser.stringToArray(monthAndDay));

     // when & then
    expect(() => {
      validateMonthAndDay(parsedMonthAndDay);
    }).not.toThrow();
  });
});
