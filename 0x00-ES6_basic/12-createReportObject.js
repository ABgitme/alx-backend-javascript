export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList, // Use spread syntax to include all departments and their employees
    },
    getNumberOfDepartments() {
      return Object.keys(employeesList).length; // Returns the number of departments
    },
  };
}
