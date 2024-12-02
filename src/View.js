import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from './constant/message.js';

const View = {
  inputStart() {
    return Console.readLineAsync(INPUT_MESSAGE.start);
  },
};

export default View;
