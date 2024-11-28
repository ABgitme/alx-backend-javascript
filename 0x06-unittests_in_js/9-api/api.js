// api.js
const express = require('express');
const app = express();

// Define the route for GET /
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Define the route for GET /cart/:id
app.get('/cart/:id', (req, res) => {
  const cartId = req.params.id;

  // Check if the cartId is a valid number using regex
  if (/^\d+$/.test(cartId)) {
    res.send(`Payment methods for cart ${cartId}`);
  } else {
    res.status(404).send('Cart not found');
  }
});

// Start the server on port 7865
app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});
