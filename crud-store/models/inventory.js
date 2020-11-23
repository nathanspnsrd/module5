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
    },
    timesPurchased: {
        type: Number,
        default: 0
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: "Createor",
        required: true
    }
})

module.exports = mongoose.model("Inventory", inventorySchema)