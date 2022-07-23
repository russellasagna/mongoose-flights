const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

// All routes "start with" / (from server.js)

// POST /flights/:id/destinations (create functionality)
router.post('/flights/:id/destinations', destinationsCtrl.create);

module.exports = router;