export default class Money {
  constructor(amountOfMoney) {
      this.amount = amountOfMoney || 0
  }

  get Template() {

      return /*html*/`
      <div class="card p-2 value">
          ${this.amount}
      </div>
      `
  }
}
