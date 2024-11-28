// api.js
const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

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

// New route: GET /available_payments
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

// New route: POST /login
app.post('/login', (req, res) => {
  const { userName } = req.body;

  // Check if userName is provided
  if (userName) {
    res.send(`Welcome ${userName}`);
  } else {
    res.status(400).send('Missing username');
  }
});

// Start the server on port 7865
app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});
