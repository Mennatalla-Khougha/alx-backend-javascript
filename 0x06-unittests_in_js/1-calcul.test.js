#!/usr/bin/node
const calculateNumber = require('./1-calcul.js');
const assert = require('assert');

describe('calculateNumber - SUM', () => {
  it('Sum of a, b', () => {
    assert.equal(calculateNumber('SUM', 15.78, 2), 18);
  });
  it('Sum of a, b', () => {
    assert.equal(calculateNumber('SUM', 1.2, 0.2), 1);
  });
  it('Sum of a, b', () => {
    assert.equal(calculateNumber('SUM', 0, 1.2), 1);
  });
  it('sum of a, b', () => {
    assert.equal(calculateNumber('SUM', -4.5, 1.7), -2);
  });
  it('sum of a, b', () => {
    assert.equal(calculateNumber('SUM', -4.5, -1.7), -6);
  });
});

describe('calculateNumber - SUBTRACT', () => {
  it('Subtract of a, b', () => {
    assert.equal(calculateNumber('SUBTRACT', 15.78, 2), 14);
  });
  it('Subtract of a, b', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.78, 2), 0);
  });
  it('Subtract of a, b', () => {
    assert.equal(calculateNumber('SUBTRACT', 0.78, 2), -1);
  });
  it('Subtract of a, b', () => {
    assert.equal(calculateNumber('SUBTRACT', -0.78, 2), -3);
  });
  it('Subtract of a, b', () => {
    assert.equal(calculateNumber('SUBTRACT', 0.78, -2), 3);
  });
  it('Subtract of a, b', () => {
    assert.equal(calculateNumber('SUBTRACT', 5.78, -2), 8);
  });
  it('Subtract of a, b', () => {
    assert.equal(calculateNumber('SUBTRACT', -5.78, -2), -4);
  });
  it('Subtract of a, b', () => {
    assert.equal(calculateNumber('SUBTRACT', -1.78, -2), 0);
  });
});

describe('calculateNumber - DIVIDE', () => {
  it('DIVIDE of a, b', () => {
    assert.equal(calculateNumber('DIVIDE', 15.78, 2), 8);
  });
  it('DIVIDE of a, b', () => {
    assert.equal(calculateNumber('DIVIDE', 15.78, 0), 'ERROR');
  });
  it('DIVIDE of a, b', () => {
    assert.equal(calculateNumber('DIVIDE', 0, 0), 'ERROR');
  });
  it('DIVIDE of a, b', () => {
    assert.equal(calculateNumber('DIVIDE', 0, 5), 0);
  });
  it('DIVIDE of a, b', () => {
    assert.equal(calculateNumber('DIVIDE', 3, 5), 0.6);
  });
  it('DIVIDE of a, b', () => {
    assert.equal(calculateNumber('DIVIDE', 13, 5), 2.6);
  });
  it('DIVIDE of a, b', () => {
    assert.equal(calculateNumber('DIVIDE', 15, 60), 0.25);
  });
});
