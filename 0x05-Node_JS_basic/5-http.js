const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Parse the request URL
  const parsedUrl = url.parse(req.url, true);
  // Set the response content type to plain text
  res.setHeader('Content-Type', 'text/plain');

  if (parsedUrl.pathname === '/') {
    res.statusCode = 200;
    res.write('Hello Holberton School!');
    res.end();
  } else if (parsedUrl.pathname === '/students') {
    // Handle the /students path
    res.statusCode = 200;
    res.write('This is the list of our students\n');

    // Get the database file path from the command-line argument
    const database = process.argv[2];

    // Use countStudents to read and process the database
    countStudents(database)
      .then((output) => {
        // Log detailed output to Terminal 1 (server terminal)
        console.log(output);

        // End the response to Terminal 2 (client terminal)
        res.end();
      })
      .catch((err) => {
        // Log error to Terminal 1 (server terminal)
        console.error(err.message);

        // Respond with the error message to Terminal 2
        res.end(`${err.message}\n`);
      });
  } else {
    // Handle undefined paths with a 404 error
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app
module.exports = app;
