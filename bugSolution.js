const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json({ limit: '50mb' })); // Added limit to handle large requests

app.post('/user', (req, res) => {
  // Check if request body is successfully parsed
  if (!req.body) {
    return res.status(400).json({ error: 'Invalid JSON request body' });
  }
  console.log(req.body); 
  res.send('User created');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});