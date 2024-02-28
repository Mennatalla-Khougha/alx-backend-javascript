const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    it('should use Utils.calculateNumber with type SUM and return 10', () => {
        const calculateNumberSpy = sinon.spy(console, 'log');
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        sendPaymentRequestToApi(100, 20);
        expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
        expect(calculateNumberSpy.calledWith('The total is: 10')).to.be.true;
        calculateNumberStub.restore();
        calculateNumberSpy.restore();
    });
});
