// 3-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber with correct arguments and log the result', function() {
    // Create a spy for Utils.calculateNumber
    const spy = sinon.spy(Utils, 'calculateNumber');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Assert the spy was called once with the correct arguments
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWithExactly('SUM', 100, 20)).to.be.true;

    // Restore the original method
    spy.restore();
  });
});
