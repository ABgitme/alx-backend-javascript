const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  describe('SUM operation', function() {
    it('should return the sum of two rounded numbers', function() {
      expect(calculateNumber('SUM', 1.4, 2.6)).to.equal(4);
      expect(calculateNumber('SUM', 1.5, 2.5)).to.equal(5);
      expect(calculateNumber('SUM', -1.4, -2.6)).to.equal(-4);
    });
  });

  describe('SUBTRACT operation', function() {
    it('should return the subtraction of two rounded numbers', function() {
      expect(calculateNumber('SUBTRACT', 5.4, 3.6)).to.equal(1);
      expect(calculateNumber('SUBTRACT', 1.5, 2.5)).to.equal(-1);
      expect(calculateNumber('SUBTRACT', -5.4, -2.6)).to.equal(-2);
    });
  });

  describe('DIVIDE operation', function() {
    it('should return the division of two rounded numbers', function() {
      expect(calculateNumber('DIVIDE', 7.4, 3.6)).to.equal(1.75); // 7 ÷ 4
      expect(calculateNumber('DIVIDE', -8.4, 1.6)).to.equal(-4); // -7 ÷ 2
    });

    it('should return "Error" when dividing by zero', function() {
      expect(calculateNumber('DIVIDE', 10.4, 0.4)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 10.4, -0.4)).to.equal('Error');
    });
  });

  describe('Invalid operation type', function() {
    it('should throw an error for invalid operation type', function() {
      expect(() => calculateNumber('MULTIPLY', 1.4, 2.6)).to.throw(
        'Invalid operation type',
      );
    });
  });
});
