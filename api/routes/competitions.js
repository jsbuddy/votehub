const express = require('express');
const router = express.Router();
const { getCompetition, getCompetitions, createCompetition, vote } = require('../controllers/competitions');

router.get('/:id', getCompetition);
router.get('/', getCompetitions);
router.post('/', createCompetition);
router.put('/vote/:id', vote);

module.exports = router;