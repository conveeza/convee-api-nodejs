// routes/api.js
const express = require('express');
const router = express.Router();

router.use(express.json());

//================================ Define Test API endpoints
router.get('/greet', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});

//================================ Define Main API endpoints

module.exports = router;