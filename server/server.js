const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const shapes = require('./routes/shapeRoute');

/** ---------- BODY PARSER MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/shapes', shapes);
/** ---------- MONGOOSE ------------ **/
const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost:27017/wild-shapes';

mongoose.connection.on('connected', () => {
    console.log('mongoose connected');
});
mongoose.connection.on('error', () => {
    console.log('mongoose connection failed');
});
mongoose.connect(dbUrl);

/** ---------- PORT ---------- **/
const PORT = process.env.PORT || 5000;

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});