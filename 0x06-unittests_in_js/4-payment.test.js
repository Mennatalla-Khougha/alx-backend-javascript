const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    it('should use Utils.calculateNumber with type SUM and return 10', () => {
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        const calculateNumberSpy = sinon.spy(console, 'log');
        sendPaymentRequestToApi(100, 20);
        expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
        calculateNumberStub.restore();
        calculateNumberSpy.restore();
    });
});
