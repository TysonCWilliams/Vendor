import { ProxyState } from "../AppState.js";
import Value from "../Models/Value.js";

class ValuesService {
  addMoney(amount) {
    console.log('Add Money Here!!!')
  }
  addValue() {
    ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
}

export const valuesService = new ValuesService();

