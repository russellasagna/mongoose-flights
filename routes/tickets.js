const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// All routes "start with" / (from server.js)

// GET /tickets/new
router.get('/flights/:id/tickets/new', ticketsCtrl.new)

// POST /flights/:id/tickets
router.post('/flights/:id/tickets', ticketsCtrl.create)


module.exports = router;