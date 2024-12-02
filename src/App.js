import View from './View.js';
import WorkMonth from './WorkMonth.js';

class App {
  async run() {
    const startInput = await View.inputStart();
    const workMonth = new WorkMonth(startInput);
  }
}

export default App;
