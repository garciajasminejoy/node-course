const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware');
    next(); // allows the request to continue to the next middleware, ie code below
});

app.use((req, res, next) => {
    console.log('another middleware');
    res.send('<h1>Hello from Express</h1>');
});

app.listen(3000);