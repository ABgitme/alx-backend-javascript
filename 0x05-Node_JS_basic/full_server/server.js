import express from 'express';
import router from './routes';

const app = express();

// Use the routes defined in the routes/index.js file
app.use(router);

// Get the database file path from the command-line argument
const databaseFilePath = process.argv[2];

// Make sure the server is reading the database file properly for testing
if (!databaseFilePath) {
  console.error('Please provide a database file path as an argument.');
  process.exit(1);
}

// Start the server
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app for potential use in testing
export default app;
