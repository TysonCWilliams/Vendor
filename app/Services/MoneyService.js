import { ProxyState } from "../AppState.js";
import Money from "../Models/Money.js";

class MoneyService {
  addMoney(amount) {
    console.log('Add Money Here!!!')
    let currentAmount = ProxyState.totalAmount.amount
    ProxyState.totalAmount = new Money(parseInt(currentAmount) + parseInt(amount));
  }

  checkAvailableFunds() {

  }

  dispenseChange() {

  }
}

export const moneyService = new MoneyService();

