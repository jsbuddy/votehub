const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const competitionSchema = new Schema({
    name: { type: String, required: true, unique: true },
    deadline: { type: Date, required: true },
    contestants: [
        {
            name: String,
            detail: String,
            imageUrl: String,
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
}, { timestamps: true })

module.exports = mongoose.model('competition', competitionSchema);