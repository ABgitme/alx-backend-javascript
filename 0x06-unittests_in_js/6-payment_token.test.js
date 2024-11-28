// 6-payment_token.test.js
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should return a resolved promise with success message when success is true', function(
    done,
  ) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        expect(response).to.deep.equal({
          data: 'Successful response from the API',
        });
        done(); // Call done to signal the test is complete
      })
      .catch(error => done(error)); // Handle unexpected errors
  });

  it('should do nothing when success is false', function(done) {
    const result = getPaymentTokenFromAPI(false);
    expect(result).to.be.undefined; // The function should return undefined
    done(); // Mark the test as complete
  });
});
