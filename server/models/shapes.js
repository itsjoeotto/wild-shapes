const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shapeSchema = new Schema({
    name: String,
    size: String,
    ac: Number,
    hp: {
        num: Number,
        diceType: Number,
        modifier: Number,
        average: Number
    },
    speed: String,
    attributes: {
        str: String,
        dex: String,
        con: String,
        int: String,
        wis: String,
        cha: String
    },
    skills: String,
    senses: String,
    languages: String,
    challenge: String,
    traits: [],
    actions: []
});

const Shape = mongoose.model('Shape', shapeSchema);

module.exports = Shape;