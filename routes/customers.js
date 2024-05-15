const express = require('express');
const router = express.Router();
const { executeQuery } = require('../db-queries');
router.use(express.json());

//================================ Define Test API endpoints
router.get('/greet', (req, res) => {
    res.json({ message: 'Hello Customers from the API!' });
});


//================================ Define Main API endpoints
router.get('/getCustomers', async (req, res, next) => {
    try {
        const results = await executeQuery('SELECT * FROM Users.Customer');
        res.json(results);
    } catch (error) {
        next(error);
    }
});

module.exports = router;