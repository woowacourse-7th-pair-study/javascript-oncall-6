import { ERROR_MESSAGE, SERVICE_CONSTANTS } from '../src/constants';
import Validators from '../src/Utils/Validators.js';

describe('Validator Test', () => {
  describe('checkIsInteger : 숫자인지 검증', () => {
    test.each(['ㅡ', ',', '*', '1.1', '-10'])(
      '정수가 아닌 값에 대해서 에러를 발생시킨다. - %s',
      (value) => {
        expect(() => Validators.checkIsInteger(value)).toThrow(ERROR_MESSAGE.errorPrefix);
      },
    );

    test.each([1, 10])('정수 값을 입력하면 정상적으로 동작한다. - %s', (value) => {
      expect(() => Validators.checkIsInteger(value)).not.toThrow();
    });
  });

  describe('checkIsCorrectMonth : 유효한 월 값이 입력되었는지 검증', () => {
    test.each([-1, 0, 2133224])('유효하지 않은 월이 입력되면 에러를 발생시킨다. - %s', (value) => {
      expect(() => Validators.checkIsCorrectMonth(value)).toThrow(ERROR_MESSAGE.errorPrefix);
    });

    test.each([1, 4, 12])('유효한 월이 입력되면 정상적으로 동작한다. - %s', (value) => {
      expect(() => Validators.checkIsCorrectMonth(value)).not.toThrow();
    });
  });

  describe('checkIsDayName : 유효한 요일이 입력되었는지 검증', () => {
    test.each(['큼', '퀄', '뭬', ''])(
      '유효하지 않은 요일이 입력되면 에러를 발생시킨다. - %s',
      (value) => {
        expect(() => Validators.checkIsDayName(value)).toThrow(ERROR_MESSAGE.errorPrefix);
      },
    );

    test.each(['월', '금'])('유효한 월이 입력되면 정상적으로 동작한다. - %s', (value) => {
      expect(() => Validators.checkIsDayName(value)).not.toThrow();
    });
  });

  describe('checkDuplicated : 중복된 값이 존재하는지 검증', () => {
    test('중복된 값이 존재하면 에러를 발생시킨다.', () => {
      const testValue = ['a', 'a', 'b', 'c'];

      expect(() => Validators.checkDuplicated(testValue)).toThrow(ERROR_MESSAGE.errorPrefix);
    });

    test('중복된 값이 존재하지 않으면 정상적으로 동작한다.', () => {
      const testValue = ['a', 'b', 'c', 'd', 'e'];

      expect(() => Validators.checkDuplicated(testValue)).not.toThrow();
    });
  });

  describe('checkIsBlank : 해당 값이 빈 칸인지 검증', () => {
    test('값이 빈칸이면 에러를 발생시킨다.', () => {
      expect(() => Validators.checkIsBlank('')).toThrow(ERROR_MESSAGE.errorPrefix);
    });
  });

  describe('checkNameLength : 이름 길이가 유효한지 검증', () => {
    test.each(['긴꼬리원숭이', '목도리도마뱀', '이렇게긴이름이있을수가있을까'])(
      `유효한 이름 길이(${SERVICE_CONSTANTS.workerNameLengthLimit} 이하)를 벗어나면 에러를 발생시킨다. - %s`,
      (value) => {
        expect(() => Validators.checkNameLength(value)).toThrow(ERROR_MESSAGE.errorPrefix);
      },
    );

    test.each(['개코삼숭이', '다섯글자', 'OOOOO'])(
      `유효한 이름 길이(${SERVICE_CONSTANTS.workerNameLengthLimit} 이하)를 가지면 정상적으로 동작한다. - %s`,
      (value) => {
        expect(() => Validators.checkNameLength(value)).not.toThrow();
      },
    );
  });

  describe(`checkWorkerCount : 유효한 근무자 명 수(${SERVICE_CONSTANTS.minimumWorker}이상, ${SERVICE_CONSTANTS.maximumWorker} 이하)만큼 존재하는지 검증`, () => {
    test('중복된 값이 존재하면 에러를 발생시킨다.', () => {
      const testValue = ['a', 'b'];

      expect(() => Validators.checkWorkerCount(testValue)).toThrow(ERROR_MESSAGE.errorPrefix);
    });

    test('중복된 값이 존재하지 않으면 정상적으로 동작한다.', () => {
      const testValue = ['a', 'b', 'c', 'd', 'e', 'd', 'f'];

      expect(() => Validators.checkWorkerCount(testValue)).not.toThrow();
    });
  });
});
