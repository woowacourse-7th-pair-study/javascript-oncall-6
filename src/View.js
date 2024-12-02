import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./constant/message.js";

const View = {
  inputStart() {
    return Console.readLineAsync(INPUT_MESSAGE.start);
  },

  inputNormalDayShift() {
    return Console.readLineAsync(INPUT_MESSAGE.normalDay);
  },

  inputDayOffShift() {
    return Console.readLineAsync(INPUT_MESSAGE.dayOff);
  },

  printMessage(message) {
    Console.print(message);
  },
};

export default View;
