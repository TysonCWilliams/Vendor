import { ProxyState } from "../AppState.js";
import { moneyService } from "../Services/MoneyService.js";


//Private
function _draw() {
  let totalAmount = ProxyState.totalAmount;
  console.log(totalAmount)
  let template = ''
  template += totalAmount.Template
  document.getElementById("money-interface").innerHTML = /*html*/`
  <div id="total-amount"></div>
  <div className="card">
      ${template}
  </div>
  <input id="money-input" type="number"/>
  <button class="btn btn-info" onclick="app.moneyController.addMoney()">Add Money</button>  
  `
}

//Public
export default class MoneyController {
  constructor() {
    ProxyState.on("totalAmount", _draw);
    _draw()
  }

  addMoney() {
    var moneyInput = document.getElementById('money-input')
    console.log(moneyInput.value)
    moneyService.addMoney(moneyInput.value)
  }

  checkAvailableFunds() {

  }

  dispenseChange() {

  }

}
