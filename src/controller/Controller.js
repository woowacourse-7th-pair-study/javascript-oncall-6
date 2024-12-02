import InputHandler from "../inputHandler/InputHandler.js";

export default class Controller {
  #inputHandler;
  constructor() {
    this.#inputHandler = new InputHandler();
  }

  async play() {
    const input = await this.#inputHandler.getValidatedInput();
  }
}
