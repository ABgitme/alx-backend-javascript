// api.test.js
const request = require('request');
const { expect } = require('chai');
const { describe, it } = require('mocha');

describe('GET /', function() {
  it('should return status code 200', function(done) {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200); // Check status code
      done();
    });
  });

  it('should return "Welcome to the payment system"', function(done) {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system'); // Check response body
      done();
    });
  });
});

describe('GET /cart/:id', function() {
  // Test when :id is a number
  it('should return status code 200 for a valid number', function(done) {
    request('http://localhost:7865/cart/123', (error, response, body) => {
      expect(response.statusCode).to.equal(200); // Check status code
      done();
    });
  });

  it('should have correct content for correct url', function(done) {
    request.get('http://localhost:7865/cart/10', function(err, res, body) {
      expect(body).to.contain('Payment methods for cart 10');
      done();
    });
  });

  // Test when :id is NOT a number (404 case)
  it('should return status code 404 for invalid id', function(done) {
    request('http://localhost:7865/cart/abc', (error, response, body) => {
      expect(response.statusCode).to.equal(404); // Check status code
      done();
    });
  });

  // Test when :id is missing
  it('should return status code 404 for missing id', function(done) {
    request('http://localhost:7865/cart/', (error, response, body) => {
      expect(response.statusCode).to.equal(404); // Check status code
      done();
    });
  });
});

describe('GET /available_payments', function() {
  it('should return status code 200', function(done) {
    request(
      'http://localhost:7865/available_payments',
      (error, response, body) => {
        expect(response.statusCode).to.equal(200); // Check status code
        expect(body).to.deep.equal(
          JSON.stringify({
            payment_methods: {
              credit_cards: true,
              paypal: false,
            },
          }),
        ); // Check deep equality for the response body
        done();
      },
    );
  });
});

describe('POST /login', function() {
  it('should return status code 200 and welcome message for valid username', function(
    done,
  ) {
    request.post(
      {
        url: 'http://localhost:7865/login',
        json: { userName: 'Alice' },
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200); // Check status code
        expect(body).to.equal('Welcome Alice'); // Check response body
        done();
      },
    );
  });

  it('should return status code 400 for missing username', function(done) {
    request.post(
      {
        url: 'http://localhost:7865/login',
        json: {},
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(400); // Check status code
        expect(body).to.equal('Missing username'); // Check error message
        done();
      },
    );
  });
});
