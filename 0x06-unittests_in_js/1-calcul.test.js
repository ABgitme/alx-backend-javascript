const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM operation', function() {
    it('should return the sum of two rounded numbers', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.6), 4);
      assert.strictEqual(calculateNumber('SUM', 1.5, 2.5), 5);
      assert.strictEqual(calculateNumber('SUM', -1.4, -2.6), -4);
    });
  });

  describe('SUBTRACT operation', function() {
    it('should return the subtraction of two rounded numbers', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.4, 3.6), 1);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 2.5), -1);
      assert.strictEqual(calculateNumber('SUBTRACT', -5.4, -2.6), -2);
    });
  });

  describe('DIVIDE operation', function() {
    it('should return the division of two rounded numbers', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 7.4, 3.6), 1.75); // 7 ÷ 3
      assert.strictEqual(calculateNumber('DIVIDE', -8.4, 1.6), -4); // -7 ÷ 3
    });

    it('should return "Error" when dividing by zero', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 10.4, 0.4), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 10.4, -0.4), 'Error');
    });
  });

  describe('Invalid operation type', function() {
    it('should throw an error for invalid operation type', function() {
      assert.throws(() => calculateNumber('MULTIPLY', 1.4, 2.6), {
        name: 'Error',
        message: 'Invalid operation type',
      });
    });
  });
});
