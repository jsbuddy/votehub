const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const competitionSchema = new Schema({
    name: { type: String, required: true, unique: true },
    deadline: { type: Date, required: true },
    contestants: [
        {
            name: String,
            department: String,
            imageUrl: String,
            votesCount: { type: Number, default: 0 }
        }
    ],
    votes: [
        {
            contestantId: String,
            facebookId: String,
            name: String,
            remoteAddress: String
        }
    ]
})

module.exports = mongoose.model('competition', competitionSchema);