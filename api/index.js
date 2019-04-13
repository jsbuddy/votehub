const express = require('express');
const router = express.Router();
const competitions = require('./routes/competitions')

module.exports = (app) => {
    const api = express.Router();
    app.use('/api', api);

    api.use('/competitions', competitions);
};