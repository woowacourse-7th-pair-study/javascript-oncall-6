import { MissionUtils } from "@woowacourse/mission-utils";

export default class OutputView {
  static printScheduler(schedulerString) {
    schedulerString.forEach((string) => {
      MissionUtils.Console.print(string);
    });
  }
}
