function calculateNumber(a, b) {
  // Explicitly round both numbers and return their sum
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);
  return roundedA + roundedB;
}

module.exports = calculateNumber;
