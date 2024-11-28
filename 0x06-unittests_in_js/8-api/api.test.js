// api.test.js
const request = require('request');
const { expect } = require('chai');

describe('GET /', function() {
  // Test that the server is up and running
  it('should return status code 200', function(done) {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200); // Check status code
      done();
    });
  });

  // Test the response message
  it('should return "Welcome to the payment system"', function(done) {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system'); // Check response body
      done();
    });
  });
});
