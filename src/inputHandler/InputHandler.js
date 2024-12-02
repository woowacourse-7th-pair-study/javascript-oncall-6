import Validate from "../validate/Validate.js";
import InputView from "../View/InputView.js";
import { Console } from "@woowacourse/mission-utils";
export default class InputHandler {
  constructor() {}

  static async monthAndStartDay() {
    try {
      const input = await InputView.mothAndStartDay();
      //input 가공
      const inputArr = input.split(",").map((el, index) => {
        if (index === 0) return Number(el.trim());
        if (index === 1) return el.trim();
      });
      //validate
      Validate.monthAndStartDay(inputArr);
      Validate.month(inputArr[0]);
      Validate.startDay(inputArr[1]);

      return inputArr;
    } catch (e) {
      Console.print(e.message);
      return await this.monthAndStartDay();
    }
  }

  static async weekdayOrder() {
    try {
      const input = await InputView.weekdayOrder();
      const inputArr = input.split(",").map((inputName) => {
        const name = inputName.trim();
        Validate.nickName(name);
        return name;
      });

      return inputArr;
    } catch (e) {
      throw new Error(e);
    }
  }

  static async holidayOrder() {
    try {
      const input = await InputView.holidayOrder();
      const inputArr = input.split(",").map((inputName) => {
        const name = inputName.trim();
        Validate.nickName(name);
        return name;
      });

      return inputArr;
    } catch (e) {
      throw new Error(e);
    }
  }
  static async Order() {
    try {
      const weekdayOrder = await this.weekdayOrder();
      const holidayOrder = await this.holidayOrder();
      Validate.orderArr(weekdayOrder);
      Validate.orderArr(holidayOrder);
      Validate.sameWorker(weekdayOrder, holidayOrder);

      return { weekdayOrder, holidayOrder };
    } catch (e) {
      Console.print(e.message);
      return await this.Order();
    }
  }
}
