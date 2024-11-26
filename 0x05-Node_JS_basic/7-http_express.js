const express = require('express');
const countStudents = require('./3-read_file_async'); // Import the countStudents function

// Create an Express application
const app = express();

// Define the root route (/)
app.get('/', (req, res) => {
  res.type('text/plain'); // Set the response type to plain text
  res.send('Hello Holberton School!');
});

// Define the /students route
app.get('/students', (req, res) => {
  // Get the database file path from the command-line argument
  const database = process.argv[2];

  res.type('text/plain'); // Set the response type to plain text

  res.write('This is the list of our students');

  // Call countStudents with the provided database file
  countStudents(database)
    .then(output => {
      // Respond with the list of students (from the countStudents output)
      res.end(output);
    })
    .catch(err => {
      // If there's an error (e.g., database not found), send the error message
      res.end(`${err.message}\n`);
    });
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app for possible use in other modules
module.exports = app;
