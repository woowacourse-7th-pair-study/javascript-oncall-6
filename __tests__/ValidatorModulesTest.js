import { ERROR_MESSAGE } from '../src/constants.js';
import ValidateModules from '../src/Utils/ValidateModules.js';

describe('ValidatorModules Test', () => {
  describe('checkMonthAndDay : 근무표 월과 시작 요일 입력에 대한 검증 모듈', () => {
    test.each(['1.1,월', ',월', '1,큼', '12323,토'])(
      '유효하지 않은 월/요일 입력값에 대해서 에러를 발생시킨다. - %s',
      (value) => {
        expect(() => ValidateModules.checkMonthAndDay(value)).toThrow(ERROR_MESSAGE.errorPrefix);
      },
    );

    test.each(['1,월', '4,월', '10,금'])(
      '유효한 월/요일 입력값에 대해서 제대로 동작한다. - %s',
      (value) => {
        expect(() => ValidateModules.checkMonthAndDay(value)).not.toThrow();
      },
    );
  });

  describe('checkWorkers : 근무표 월과 시작 요일 입력에 대한 검증 모듈', () => {
    test.each([
      '루르,사이다,콜라',
      '루르,사이다,콜라,빅맥,허브,오션,오션',
      '',
      '루르,사이다,콜라,빅맥,허브,이렇게긴이름이존재할까',
    ])('유효하지 않은 월/요일 입력값에 대해서 에러를 발생시킨다. - %s', (value) => {
      expect(() => ValidateModules.checkWorkers(value)).toThrow(ERROR_MESSAGE.errorPrefix);
    });

    test.each(['루르,사이다,콜라,빅맥,허브,오션'])(
      '유효한 월/요일 입력값에 대해서 제대로 동작한다. - %s',
      (value) => {
        expect(() => ValidateModules.checkWorkers(value)).not.toThrow();
      },
    );
  });
});
