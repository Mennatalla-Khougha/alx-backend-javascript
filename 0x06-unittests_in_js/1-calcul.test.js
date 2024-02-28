#!/usr/bin/node
const calculateNumber = require('./0-calcul.js');
const assert = require('assert');


describe('calculateNumber - SUM', () => {
    it('Sum of a, b', () => {
        assert.equal(calculateNumber(15.78, 2), 18);
    });
    it('Sum of a, b', () => {
    assert.equal(calculateNumber(1.2, 0.2), 1);
    });
    it('Sum of a, b', () => {
        assert.equal(calculateNumber(0, 1.2), 1);
    });
})

describe('calculateNumber - SUBTRACT', () => {
    it('Subtract of a, b', () => {
        assert.equal(calculateNumber(15.78, 2), 14);
    });
    it('Subtract of a, b', () => {
        assert.equal(calculateNumber(15.78, 2), 14);
    });
})