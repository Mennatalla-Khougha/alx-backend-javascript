export default class Currency {
  constructor(code, name) {
    if (typeof (code) !== 'string') {
      throw TypeError('code must be a string');
    }
    if (typeof (name) !== 'string') {
      throw TypeError('name must be a string');
    }

    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof (newCode) !== 'string') {
      throw TypeError('code must be a string');
    }
    this._code = newCode;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof (newName) !== 'string') {
      throw TypeError('name must be a string');
    }
    this._name = newName;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
