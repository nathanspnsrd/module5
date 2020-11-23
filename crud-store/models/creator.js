const mongoose = require("mongoose")
const Schema = mongoose.Schema

//Inventory Blueprint
const creatorSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Creator", creatorSchema)