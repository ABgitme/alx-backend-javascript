// api.js
const express = require('express');
const app = express();

// Define the route for GET /
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Start the server on port 7865
app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});
