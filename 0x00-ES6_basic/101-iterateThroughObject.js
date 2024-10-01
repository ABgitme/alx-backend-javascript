export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = []; // Create an array to hold employee names

  // Iterate through the iterator
  for (const employee of reportWithIterator) {
    employeeNames.push(employee); // Add each employee to the array
  }

  // Join the names with ' | ' and return the result
  return employeeNames.join(' | ');
}
