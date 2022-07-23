const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

module.exports = {
    index,
    show,
    new: newFlight,
    create,
};

function index(req, res) {
    Flight.find({}, function (err, flights) {
        res.render('flights/index', { title: 'All Flights', flights });
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', { flight, tickets});
        })
    });
}

function newFlight(req, res) {
    Flight.find({}, function (err, flights) {
        res.render('flights/new', { flights });
    });
}

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    var flight = new Flight(req.body);
    flight.save(function (err) {
        // one way to handle errors
        if (err) {
            return res.redirect('/flights/new');
        }
        res.redirect(`/flights`);
    });
}

