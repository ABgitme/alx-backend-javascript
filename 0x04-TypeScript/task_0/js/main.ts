// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two student objects
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles",
  };
  
  // Create an array containing the students
  const studentsList: Student[] = [student1, student2];
  
  // Function to render a table using Vanilla JavaScript
  function renderTable(students: Student[]): void {
    // Create a table element
    const table = document.createElement("table");
    table.border = "1";
  
    // Create the table header
    const headerRow = document.createElement("tr");
    const headerFirstName = document.createElement("th");
    const headerLocation = document.createElement("th");
  
    headerFirstName.textContent = "First Name";
    headerLocation.textContent = "Location";
  
    headerRow.appendChild(headerFirstName);
    headerRow.appendChild(headerLocation);
    table.appendChild(headerRow);
  
    // Iterate over the students array and append rows to the table
    students.forEach((student) => {
      const row = document.createElement("tr");
      const firstNameCell = document.createElement("td");
      const locationCell = document.createElement("td");
  
      firstNameCell.textContent = student.firstName;
      locationCell.textContent = student.location;
  
      row.appendChild(firstNameCell);
      row.appendChild(locationCell);
      table.appendChild(row);
    });
  
    // Append the table to the body of the document
    document.body.appendChild(table);
  }
  
  // Call the renderTable function with the studentsList array
  renderTable(studentsList);
  