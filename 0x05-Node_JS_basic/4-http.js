const http = require('http');

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set response headers
  res.statusCode = 200; // HTTP status OK
  res.setHeader('Content-Type', 'text/plain'); // Set content type to plain text

  // Send the response body
  res.end('Hello Holberton School!');
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app
module.exports = app;
