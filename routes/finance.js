const express = require('express');
const router = express.Router();
const { executeQuery } = require('../db-queries');
router.use(express.json());

//================================ Define Test API endpoints
router.get('/greet', (req, res) => {
    res.json({ message: 'Hello Financials from the API!' });
});


//================================ Define Main API endpoints
router.get('/getPayments', async (req, res, next) => {
    try {
        const results = await executeQuery('SELECT * FROM Finance.Payments');
        res.json(results);
    } catch (error) {
        next(error);
    }
});

router.get('/getPaymentStatuses', async (req, res, next) => {
    try {
        const results = await executeQuery('SELECT * FROM Finance.Payment_Status');
        res.json(results);
    } catch (error) {
        next(error);
    }
});

module.exports = router;