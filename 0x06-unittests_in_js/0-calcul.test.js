const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return the sum of two rounded numbers', function() {
    assert.strictEqual(calculateNumber(1.4, 2.6), 4);
    assert.strictEqual(calculateNumber(1.5, 2.5), 5);
  });

  it('should round numbers down correctly', function() {
    assert.strictEqual(calculateNumber(1.4, 0.4), 1);
  });

  it('should round numbers up correctly', function() {
    assert.strictEqual(calculateNumber(1.6, 2.4), 4);
  });

  it('should work with negative numbers', function() {
    assert.strictEqual(calculateNumber(-1.4, -2.6), -4);
    assert.strictEqual(calculateNumber(-1.5, -2.5), -3);
  });

  it('should handle cases where one number is zero', function() {
    assert.strictEqual(calculateNumber(0, 2.6), 3);
    assert.strictEqual(calculateNumber(1.4, 0), 1);
  });

  it('should handle cases where both numbers are zero', function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
});
