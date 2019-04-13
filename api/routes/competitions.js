const express = require('express');
const router = express.Router();
const { getCompetitions, createCompetition, vote } = require('../controllers/competitions');

router.get('/', getCompetitions);
router.post('/', createCompetition);
router.put('/vote/:id', vote);

module.exports = router;