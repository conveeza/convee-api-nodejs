const express = require('express');
const router = express.Router();
const { executeQuery } = require('../db-queries');

router.use(express.json());

//================================ Define Test API endpoints
router.get('/greet', (req, res) => {
  res.json({ message: 'Hello Projects from the API!' });
});

//================================ Define Main API endpoints
router.get('/getProjects', async (req, res, next) => {
  try {
    const results = await executeQuery('SELECT * FROM Projects.Project');
    res.json(results);
  } catch (error) {
    next(error);
  }
});

router.get('/getPriority', async(req, res, next) => {
  try {
    const results = await executeQuery('SELECT * FROM Projects.Priority');
    res.json(results);
  } catch (error) {
    next(error);
  }
});


module.exports = router;