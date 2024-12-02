import Validate from "../validate/Validate.js";
import InputView from "../View/InputView.js";
export default class InputHandler {
  constructor() {}

  handleError(e, callback) {
    Console.print(e.message);
    return callback();
  }

  async getValidatedInput() {
    try {
      const input = await InputView.inputText();
      //input 가공
      //validate
      Validate.validateInput();

      //input값 리턴, 다른 class에서 받아서 사용
      return input;
    } catch (e) {
      //에러 발생시 다시 input
      //this.inputText이름 바꾸기!!!
      return this.handleError(e, this.getValidatedInput.bind(this));
    }
  }
}
