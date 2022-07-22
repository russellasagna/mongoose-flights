const Flight = require('../models/flight');

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
        res.render('flights/show', { flight });
    });
}

function newFlight(req, res) {
    // var flight = new Flight(req.body);
    // res.render('flights/new', { flight } );
    Flight.find({}, function (err, flights) {
        res.render('flights/new', { flights });
    });
}

function create(req, res) {
    // convert nowShowing's checkbox of nothing or "on" to boolean
    // req.body.nowShowing = !!req.body.nowShowing;
    // remove whitespace next to commas
    // req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
    // split if it's not an empty string
    // if (req.body.cast) req.body.cast = req.body.cast.split(',');
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

