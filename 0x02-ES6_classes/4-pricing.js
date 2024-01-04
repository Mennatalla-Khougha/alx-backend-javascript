// import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof (amount) !== 'number') {
      throw TypeError('amount must be number');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof (newAmount) !== 'number') {
      throw TypeError('amount must be number');
    }
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof (amount) !== 'number' && typeof (conversionRate) !== 'number') {
      throw TypeError('amount & conversion rate must be number');
    }

    return amount * conversionRate;
  }
}
