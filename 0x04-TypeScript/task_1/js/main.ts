// Define the Teacher interface with index signature for dynamic properties
interface Teacher {
    readonly firstName: string;  // Only modifiable on initialization
    readonly lastName: string;   // Only modifiable on initialization
    fullTimeEmployee: boolean;   // Always defined
    location: string;            // Always defined
    yearsOfExperience?: number;  // Optional
    [key: string]: any;          // Allows for additional dynamic properties
  }

  // Directors interface extending Teacher
interface Directors extends Teacher {
    numberOfReports: number;     // Required for Directors
  }
  
  // Define the interface for the printTeacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  // Implement the printTeacher function based on the interface
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };

  // Define the interface for the constructor of the class
interface StudentClassConstructor {
    firstName: string;
    lastName: string;
  }
  
  // Define the interface for the class itself
  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Implement the StudentClass based on the defined interfaces
  class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
  
    constructor({ firstName, lastName }: StudentClassConstructor) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    // Method that returns a string indicating homework is being worked on
    workOnHomework(): string {
      return "Currently working";
    }
  
    // Method that returns the first name of the student
    displayName(): string {
      return this.firstName;
    }
  }

  // Create a teacher object with required and optional properties
  const teacher3: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: false,
    location: "London",
    contract: false,  // Dynamic property
  };
  
  // Create a director object
const director1: Directors = {
    firstName: "John",
    lastName: "Doe",
    location: "London",
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
//test teacher
console.log(teacher3);
//test director
console.log(director1);
// Test the function
console.log(printTeacher("John", "Doe"));  // Expected output: J. Doe
// Test the implementation student
const student = new StudentClass({ firstName: "John", lastName: "Doe" });
console.log(student.displayName()); // Expected output: John
console.log(student.workOnHomework()); // Expected output: Currently working