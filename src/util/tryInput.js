import { Console } from '@woowacourse/mission-utils';

const tryInput = async (inputFn) => {
  try {
    const input = await inputFn();
    return input;
  } catch (e) {
    Console.print(e.message);
    return await tryInput(() => inputFn());
  }
};

export default tryInput;
