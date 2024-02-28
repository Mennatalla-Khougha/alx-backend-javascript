const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('calculateNumber', () => {
  it('rounding of a', () => {
    assert.equal(calculateNumber(1.78, 2), 4);
  });
  it('rounding of a', () => {
    assert.equal(calculateNumber(1.2, 0), 1);
  });
  it('rounding of a', () => {
    assert.equal(calculateNumber(5.5, 2), 8);
  });

  it('rounding of b', () => {
    assert.equal(calculateNumber(2, 5.78), 8);
  });
  it('rounding of b', () => {
    assert.equal(calculateNumber(0, 1.2), 1);
  });
  it('rounding of b', () => {
    assert.equal(calculateNumber(5, 3.5), 9);
  });

  it('sum of a and b', () => {
    assert.equal(calculateNumber(5.78, 2.5), 9);
  });
  it('sum of a and b', () => {
    assert.equal(calculateNumber(1.2, 0.2), 1);
  });
  it('sum of a and b', () => {
    assert.equal(calculateNumber(4.5, 1.7), 7);
  });
});

describe('calculateNumber - negative numbers', () => {
  it('sum of a and b', () => {
    assert.equal(calculateNumber(4.5, -1.7), 3);
  });
  it('sum of a and b', () => {
    assert.equal(calculateNumber(-4.5, 1.7), -2);
  });
  it('sum of a and b', () => {
    assert.equal(calculateNumber(-4.5, -1.7), -6);
  });
});
