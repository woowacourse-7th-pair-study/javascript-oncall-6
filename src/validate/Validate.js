import { WEEKDAY } from "../Constant.js";

export default class Validate {
  static monthAndStartDay(arr) {
    if (arr.length !== 2) {
      throw new Error("[ERROR] 알맞은 형식이 아닙니다");
    }
  }
  static month(month) {
    if (Number.isNaN(month)) {
      throw new Error("[ERROR] 월은 숫자를 입력해야합니다");
    }
    if (month % 1 !== 0) {
      throw new Error("[ERROR] 알맞은 형식이 아닙니다");
    }
    if (month < 1 || month > 12) {
      throw new Error("[ERROR] 1~12 사이 숫자를 입력해주세요");
    }
  }
  static startDay(startDay) {
    if (!WEEKDAY.includes(startDay)) {
      throw new Error("[ERROR] 알맞은 형식이 아닙니다");
    }
  }
  static nickName(nickName) {
    if (nickName === "") {
      throw new Error("[ERROR] 닉네임을 입력해주세요");
    }
    if (nickName.length > 5) {
      throw new Error("[ERROR] 닉네임은 5글자 이하여야 합니다");
    }
  }
  static orderArr(orderArr) {
    const orderSet = new Set(orderArr);
    if (orderSet.size !== orderArr.length) {
      throw new Error("[ERROR] 각 근무자는 1번씩만 배정될 수 있습니다");
    }
    if (orderArr.length < 5) {
      throw new Error("[ERROR] 5명 이상을 입력해주세요");
    }
    if (orderArr.length > 35) {
      throw new Error("[ERROR] 34명 이하를 입력해주세요");
    }
  }
  static sameWorker(orderArr1, orderArr2) {
    const union = new Set([...orderArr1, ...orderArr2]);
    if (union.size !== orderArr1.length || union.size !== orderArr2.length) {
      throw new Error("[ERROR] 각 근무자는 평일,휴일 1번씩 배치되어야 합니다");
    }
  }
}
