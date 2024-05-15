const express = require('express');
const router = express.Router();
const { executeQuery } = require('../db-queries');
router.use(express.json());

//================================ Define Test API endpoints
router.get('/greet', (req, res) => {
    res.json({ message: 'Hello Sales from the API!' });
});

//================================ Define Main API endpoints
router.get('/getInvoice', async (req, res, next) => {
    try {
        const results = await executeQuery('SELECT * FROM Sales.Invoice');
        res.json(results);
    } catch (error) {
        next(error);
    }
});

router.get('/getInvoiceItem', async (req, res, next) => {
    try {
        const results = await executeQuery('SELECT * FROM Sales.Invoice_Item');
        res.json(results);
    } catch (error) {
        next(error);
    }
});

router.get('/getInvoice_Statuses', async (req, res, next) => {
    try {
        const results = await executeQuery('SELECT * FROM Sales.Invoice_Status');
        res.json(results);
    } catch (error) {
        next(error);
    }
});

router.get('/getProductCategory', async (req, res, next) => {
    try {
        const results = await executeQuery('SELECT * FROM Sales.Product_Category');
        res.json(results);
    } catch (error) {
        next(error);
    }
});

router.get('/getProductService', async (req, res, next) => {
    try {
        const results = await executeQuery('SELECT * FROM Sales.Product_Service');
        res.json(results);
    } catch (error) {
        next(error);
    }
});

module.exports = router;