export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (new.target !== Building
            && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
