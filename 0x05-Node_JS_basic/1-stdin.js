// Display welcome message and ask for the user's name
console.log('Welcome to Holberton School, what is your name?');

// Listen for user input from the standard input (stdin)
process.stdin.on('data', (data) => {
  const name = data.toString().trim(); // Convert input to a string and remove extra spaces
  console.log(`Your name is: ${name}`); // Display the user's name

  // Close the program
  console.log('This important software is now closing');
  process.exit(); // Exit the process
});
