import validateNickName from '../src/validation/validateNickName.js';
import { ERROR_MESSAGE } from '../src/constants/constants.js';
import parser from '../src/utils/parser.js';

describe('validateNickName 메서드 테스트', () => {
  test.each([
    // given
    [ 'isDuplicate: 중복된 닉네임이 있는 경우', '준팍,도밥,고니,수아,루루,글로,수아' ],
    [ 'isNameLength: 닉네임 길이가 5를 초과하는 경우', '준팍입니다람쥐,도밥,고니,수아,루루,글로' ],
    [ 'isRange: 근무자 인원 수가 5 ~ 35명 사이가 아닌 경우', '준팍' ],
    [ 
      'isRange: 근무자 인원 수가 5 ~ 35명 사이가 아닌 경우', 
      '준팍,도밥,고니,수아,루루,글로,솔로스타,우코,슬링키,참새,도리,미미,두두,카리나,닝닝,지젤,윈터,가,나,다,라,마,바,사,아,자,차,카,타,파,하,기,니,디,리,미' 
    ],
  ])('%s', (_, employees) => {
    // given
    const parsedEmployees = parser.deleteEmptyValue(parser.stringToArray(employees));

    // when & then
    expect(() => {
      validateNickName(parsedEmployees);
    }).toThrow(ERROR_MESSAGE);
  });

  test.each([
    // given
    [ '기본 케이스 (1)', '준팍,도밥,고니,수아,루루,글로,솔로스타,우코,슬링키,참새,도리' ],
    [ '기본 케이스 (2)', '수아,루루,글로,솔로스타,우코,슬링키,참새,도리,준팍,도밥,고니' ],
    [ '띄어쓰기 있는 경우', '수아, 루루, 글로, 솔로스타 , 우코 , 슬링키, 참새, 도리, 준팍, 도밥, 고니' ],
  ])('%s', (_, employees) => {
    // given
    const parsedEmployees = parser.deleteEmptyValue(parser.stringToArray(employees));

    // when & then
    expect(() => {
      validateNickName(parsedEmployees);
    }).not.toThrow();
  });
});
