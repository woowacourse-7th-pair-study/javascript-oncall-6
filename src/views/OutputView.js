import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  // print() {
  //   Console.print('출력 예시\n');
  // },

  /**
   * 에러 메시지와 함께 에러를 던진다.
   * @param {string} errorMessage 
   */
  printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  },
}

export default OutputView;
