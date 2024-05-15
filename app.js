const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Import API routes
const projRoutes = require('./routes/projects');
const salesRoutes = require('./routes/sales');
const customerRoutes = require('./routes/customers');
const financeRoutes = require('./routes/finance');
const empRoutes = require('./routes/finance');

// Serve static files from the public folder
app.use(express.static('public'));

// Use API routes
app.use('/api/projects', projRoutes);
app.use('/api/sales', salesRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/finance', financeRoutes);
app.use('/api/employee', empRoutes);

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Server running!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
