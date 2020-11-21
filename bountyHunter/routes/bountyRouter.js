const express = require("express")
const bountyRouter = express.Router()

const { v4: uuidv4 } = require("uuid")


const bounties = [
    {firstName: "Nathan", lastName: "Sutherland", isAlive: true, type: "Jedi", bountyAmount: 12000, _id: uuidv4()},
    {firstName: "Nicholas", lastName: "Black", isAlive: true, type: "Sith", bountyAmount: 12, _id: uuidv4()},
    {firstName: "Joe", lastName: "Schmoe", isAlive: false, type: "Jedi", bountyAmount: 100, _id: uuidv4()},
    {firstName: "Allison", lastName: "Smith", isAlive: true, type: "Sith", bountyAmount: 300, _id: uuidv4()},
]


//Get All
bountyRouter.get("/", (req, res) => {
    res.send(bounties)
})

//Get One
bountyRouter.get("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})

//Get by Type
bountyRouter.get("/search/type", (req, res) => {
    const type = req.query.type
    const filteredBountiesType = bounties.filter(bounty => bounty.type === type)
    res.send(filteredBountiesType)
})

//Get by Status
//Need Help
bountyRouter.get("/search/isAlive", (req, res) => {
    const isAlive = req.query.isAlive === "true"
    const filteredBountiesIsAlive = bounties.filter(bounty => bounty.isAlive === isAlive)
    res.send(filteredBountiesIsAlive)
})

//Post One
bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(newBounty)
})

//Update One
bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const updatedObject = req.body
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], updatedObject)
    res.send(updatedBounty)
})

//Delete One
bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send(`Successfully deleted the bounty from the database.`)
})


module.exports = bountyRouter