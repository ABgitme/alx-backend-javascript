// Define the DirectorInterface with the expected methods
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  // Define the TeacherInterface with the expected methods
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  // Implement the Director class based on DirectorInterface
  class Director implements DirectorInterface {
    workFromHome(): string {
      return "Working from home";
    }
  
    getCoffeeBreak(): string {
      return "Getting a coffee break";
    }
  
    workDirectorTasks(): string {
      return "Getting to director tasks";
    }
  }
  
  // Implement the Teacher class based on TeacherInterface
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return "Cannot work from home";
    }
  
    getCoffeeBreak(): string {
      return "Cannot have a break";
    }
  
    workTeacherTasks(): string {
      return "Getting to work";
    }
  }
  
  // Create the createEmployee function
  function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  }
  
  // Test the function with different inputs
  console.log(createEmployee(200));  // Expected output: Teacher instance
  console.log(createEmployee(1000)); // Expected output: Director instance
  console.log(createEmployee('$500')); // Expected output: Director instance
  