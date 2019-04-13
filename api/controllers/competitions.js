const Competition = require('../../model/competitions');

module.exports.getCompetitions = async (req, res) => {
    try {
        const competitions = await Competition.find({});
        res.status(200).json({ success: true, competitions });
    } catch (error) {
        res.status(500).json({ success: false, error });
    }
}

module.exports.createCompetition = async (req, res) => {
    try {
        const _competition = new Competition(req.body);
        const competition = await _competition.save();
        res.status(201).json({ success: true, message: 'Competition Created!', competition });
    } catch (error) {
        res.status(500).json({ success: false, error });
    }
}

module.exports.vote = async (req, res) => {
    try {
        const newVote = { ...req.body, remoteAddress: req.connection.remoteAddress };
        const competition = await Competition.findById(req.params.id);

        const voteExists = competition.votes.reduce((exists, vote) => {
            if (vote.facebookId === newVote.facebookId) exists = true;
            return exists;
        }, false);

        if (!voteExists) {
            competition.votes.push(newVote);
            const updatedCompetition = await competition.save();
            res.status(200).json({ success: true, competition: updatedCompetition })
        } else {
            res.status(203).json({ success: true, competition })
        }
    } catch (error) {
        res.json({ success: false, error });
    }
}