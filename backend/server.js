// backend/server.js
const express = require('express');
const app = express();
const port = 5000;

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
