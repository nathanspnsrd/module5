const express = require("express")
const hobbyRouter = express.Router()

const hobbies = [
    {title: "Fishing", type: "Outdoors"},
    {title: "Hiking", type: "Outdoors"},
    {title: "Knitting", type: "Indoors"},
    {title: "Running", type: "Sport"},
]

//Gets All
hobbyRouter.get("/", (req, res) => {
    res.send(hobbies)
})

//Gets One
hobbyRouter.get("/type", (req, res) => {
    const type = req.query.type
    const filteredHobbies = hobbies.filter(hobby => hobby.type === type)
    res.send(filteredHobbies)
})

module.exports = hobbyRouter