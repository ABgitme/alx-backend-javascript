export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees); // Get all employee arrays from departments

  // Create a generator function to iterate over employees
  function* employeeGenerator() {
    for (const department of employees) {
      for (const employee of department) {
        yield employee; // Yield each employee one by one
      }
    }
  }

  return employeeGenerator(); // Return the generator object
}
