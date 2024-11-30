// api.test.js
const request = require('request');
const expect = require('chai').expect;
const { describe, it } = require('mocha');

describe('GET /', function() {
  // Test that the server is up and running
  it('should return status code 200', function(done) {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200); // Check status code
      done();
    });
  });

  // Test the response message
  it('should return "Welcome to the payment system"', function(done) {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system'); // Check response body
      done();
    });
  });
});

describe('GET /cart/:id', function() {
  // Test when :id is a number
  it('should return status code 200 for a valid number', function(done) {
    request.get('http://localhost:7865/cart/123', (error, response, body) => {
      expect(response.statusCode).to.equal(200); // Check status code
      expect(body).to.equal('Payment methods for cart 123'); // Check response body
      done();
    });
  });

  // Test when :id is NOT a number (404 case)
  it('should return status code 404 for invalid id', function(done) {
    request.get('http://localhost:7865/cart/abc', (error, response, body) => {
      expect(response.statusCode).to.equal(404); // Check status code
      expect(body).to.equal('Cart not found'); // Check response body
      done();
    });
  });

  // Test when :id is missing
  it('should return status code 404 for missing id', function(done) {
    request.get('http://localhost:7865/cart/', (error, response, body) => {
      expect(response.statusCode).to.equal(404); // Check status code
      expect(body).to.equal('Cart not found'); // Check response body
      done();
    });
  });
});
