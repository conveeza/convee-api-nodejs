const express = require('express');
const router = express.Router();
const { executeQuery } = require('../db-queries');
router.use(express.json());

//================================ Define Test API endpoints
router.get('/greet', (req, res) => {
    res.json({ message: 'Hello Employees from the API!' });
});


//================================ Define Main API endpoints
router.get('/getEmployees', async (req, res, next) => {
    try {
        const results = await executeQuery('SELECT * FROM Users.Employee');
        res.json(results);
    } catch (error) {
        next(error);
    }
});

router.get('/getEmpRole', async (req, res, next) => {
    try {
        const results = await executeQuery('SELECT * FROM Users.Emp_Role');
        res.json(results);
    } catch (error) {
        next(error);
    }
});

module.exports = router;