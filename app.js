const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the public folder
app.use(express.static('public'));

// Import API routes
const apiRoutes = require('./routes/api');

// Use API routes
app.use('/api', apiRoutes);

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Server running!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
