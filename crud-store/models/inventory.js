const mongoose = require("mongoose")
const Schema = mongoose.Schema

//Inventory Blueprint
const inventorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Inventory", inventorySchema)