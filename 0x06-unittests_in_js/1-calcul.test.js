#!/usr/bin/node
const calculateNumber = require('./0-calcul.js');
const assert = require('assert');


describe('calculateNumber', () => {
    it('Sum of a, b', () => {
        assert.equal(calculateNumber(15.78, 2), 18);
    });
})