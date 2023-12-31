// Import necessary modules
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON data
app.use(express.json());

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
