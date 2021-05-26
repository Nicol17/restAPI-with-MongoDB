const express = require('express');
const mongoose = require('mongoose');
const app = express();



// MIDDLEWARE
mongoose.connect('mongodb://localhost/ourdata', { useNewUrlParser: true }, { useUnifiedTopology: true });
mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.use(express.json());

// ROUTES

app.use('/api',require('./router/api'));

app.use(function(err,req,res,next){
    res.status(422).send({error: err.message});
 });

//PORT
const PORT = process.env.PORT || 5000
app.listen(PORT, () =>
    console.log(`Server listening on port ${PORT}`))