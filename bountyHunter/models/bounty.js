const mongoose = require("mongoose")
const Schema = mongoose.Schema

//Bounty Blueprint
const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["Sith", "Jedi"],
        required: true
    },
    isAlive: {
        type: Boolean,
        required: true
    },
    bountyAmount: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Bounty", bountySchema)