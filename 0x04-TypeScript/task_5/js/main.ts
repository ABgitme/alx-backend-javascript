// Define the MajorCredits interface
interface MajorCredits {
    credits: number;
    brand: 'MajorCredits';  // Brand property to uniquely identify MajorCredits
  }
  
  // Define the MinorCredits interface
  interface MinorCredits {
    credits: number;
    brand: 'MinorCredits';  // Brand property to uniquely identify MinorCredits
  }
  
  // Function to sum MajorCredits
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: 'MajorCredits'  // Ensure the brand remains 'MajorCredits'
    };
  }
  
  // Function to sum MinorCredits
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: 'MinorCredits'  // Ensure the brand remains 'MinorCredits'
    };
  }
  