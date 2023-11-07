const express = require('express');
const mongoose = require('mongoose');
const feedRoutes = require('./routes/feed');
const dbURL = require("./dbURL.json");
const app = express();

app.use(express.json());
app.use('/feed', feedRoutes);



// connect to MongoDB Atlas
mongoose
    .connect(dbURL.dbURL
)
    .then(result => {
        app.listen(3000);
    })
    .catch(err => {
        console.log('err', err);
})


