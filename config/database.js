const mongoose = require('mongoose');

// Connect to database
mongoose.connect(process.env.DATABASE_URL);

// Shortcut to mongoose.connection Object
const db = mongoose.connection;

db.on('connected', function(){
    console.log(`Connected to ${db.name} MongoDB at ${db.host}:${db.port}`);
});