var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')

// All routes "start with" /flights (from server.js)

// GET /flights (index function - list flights)
router.get('/', flightsCtrl.index);
// GET /flights/new (new function)
router.get('/new', flightsCtrl.new);
// GET /flights/:id (show functionality)
// router.get('/:id', flightsCtrl.show);
// POST /flights (create function)
router.post('/', flightsCtrl.create);

module.exports = router;
