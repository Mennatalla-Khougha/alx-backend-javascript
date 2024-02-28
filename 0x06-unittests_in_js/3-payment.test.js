const sinon = require('sinon');
// const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

let expect;
before(async () => {
  const chaiModule = await import('chai');
  expect = chaiModule.expect;
});

describe('sendPaymentRequestToApi', () => {
  it('should use Utils.calculateNumber with type SUM', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 200);
    expect(calculateNumberSpy.calledWith('SUM', 100, 200)).to.be.true;
    calculateNumberSpy.restore();
  });
});
