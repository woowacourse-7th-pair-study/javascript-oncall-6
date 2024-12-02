import { Console } from "@woowacourse/mission-utils";

export default class OutputView {
  static printScheduler(schedulerString) {
    schedulerString.forEach((string) => {
      Console.print(string);
    });
  }
}
