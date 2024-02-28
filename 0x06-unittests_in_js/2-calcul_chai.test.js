// import calculateNumber from './2-calcul_chai.js';
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai')

describe('calculateNumber - SUM', () => {
  it('Sum of a, b', () => {
    expect(calculateNumber('SUM', 15.78, 2)).to.equal(18);
  });
  it('Sum of a, b', () => {
    expect(calculateNumber('SUM', 1.2, 0.2)).to.equal(1);
  });
  it('Sum of a, b', () => {
    expect(calculateNumber('SUM', 0, 1.2)).to.equal(1);
  });
  it('sum of a, b', () => {
    expect(calculateNumber('SUM', -4.5, 1.7)).to.equal(-2);
  });
  it('sum of a, b', () => {
    expect(calculateNumber('SUM', -4.5, -1.7)).to.equal(-6);
  });
});

describe('calculateNumber - SUBTRACT', () => {
  it('Subtract of a, b', () => {
    expect(calculateNumber('SUBTRACT', 15.78, 2)).to.equal(14);
  });
  it('Subtract of a, b', () => {
    expect(calculateNumber('SUBTRACT', 1.78, 2)).to.equal(0);
  });
  it('Subtract of a, b', () => {
    expect(calculateNumber('SUBTRACT', 0.78, 2)).to.equal(-1);
  });
  it('Subtract of a, b', () => {
    expect(calculateNumber('SUBTRACT', -0.78, 2)).to.equal(-3);
  });
  it('Subtract of a, b', () => {
    expect(calculateNumber('SUBTRACT', 0.78, -2)).to.equal(3);
  });
  it('Subtract of a, b', () => {
    expect(calculateNumber('SUBTRACT', 5.78, -2)).to.equal(8);
  });
  it('Subtract of a, b', () => {
    expect(calculateNumber('SUBTRACT', -5.78, -2)).to.equal(-4);
  });
  it('Subtract of a, b', () => {
    expect(calculateNumber('SUBTRACT', -1.78, -2)).to.equal(0);
  });
});

describe('calculateNumber - DIVIDE', () => {
  it('DIVIDE of a, b', () => {
    expect(calculateNumber('DIVIDE', 15.78, 2)).to.equal(8);
  });
  it('DIVIDE of a, b', () => {
    expect(calculateNumber('DIVIDE', 15.78, 0)).to.equal('ERROR');
  });
  it('DIVIDE of a, b', () => {
    expect(calculateNumber('DIVIDE', 0, 0)).to.equal('ERROR');
  });
  it('DIVIDE of a, b', () => {
    expect(calculateNumber('DIVIDE', 0, 5)).to.equal(0);
  });
  it('DIVIDE of a, b', () => {
    expect(calculateNumber('DIVIDE', 3, 5)).to.equal(0.6);
  });
  it('DIVIDE of a, b', () => {
    expect(calculateNumber('DIVIDE', 13, 5)).to.equal(2.6);
  });
  it('DIVIDE of a, b', () => {
    expect(calculateNumber('DIVIDE', 15, 60)).to.equal(0.25);
  });
});
