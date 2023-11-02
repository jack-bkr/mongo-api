const express = require('express');
const mongoose = require('mongoose');
const feedRoutes = require('./routes/feed');
const app = express();

app.use(express.json());
app.use('/feed', feedRoutes);

// connect to MongoDB Atlas
mongoose
    .connect('mongodb+srv://jackbkr:jomama@unilearn.ta6kria.mongodb.net/?retryWrites=true&w=majority'
)
    .then(result => {
        app.listen(3000);
    })
    .catch(err => {
        console.log('err', err);
})


