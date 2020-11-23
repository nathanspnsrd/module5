const express = require("express")
const bountyRouter = express.Router()

const Bounty = require("../models/bounty.js")


//Get All
bountyRouter.get("/", (req, res, next) => {
    Bounty.find((err, bounties) => {
        if(err) {
            res.status(500)
            res.next(err)
        }
        return res.status(200).send(bounties)
    })
})

//Get by Type
bountyRouter.get("/search/type", (req, res, next) => {
    Bounty.find({type: req.query.type}, (err, bounties) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(bounties)
    })
})


//Post One
bountyRouter.post("/", (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })
})


//Update One
bountyRouter.put("/:bountyId", (req, res, next) => {
    Bounty.findOneAndUpdate(
        {_id: req.params.bountyId}, 
        req.body,
        {new: true},
        (err, updatedBounty) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
})


//Delete One
bountyRouter.delete("/:bountyId", (req, res, next) => {
    Bounty.findOneAndDelete({_id: req.params.bountyId}, (err, deletedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedItem.firstName} ${deletedItem.lastName} from the database.`)
    })
})


module.exports = bountyRouter