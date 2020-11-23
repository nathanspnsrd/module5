const express = require("express")
const creatorRouter = express.Router()

const Creator = require("../models/creator.js")


//Get All
creatorRouter.get("/", (req, res, next) => {
    Creator.find((err, creators) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(creators)
    })
})

//Get One
creatorRouter.get("/:creatorId", (req, res, next) => {
    Creator.findById(req.params.creatorId, (err, foundItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundItem)
    })
})


//Post One
creatorRouter.post("/", (req, res, next) => {
    const newItem = new Creator(req.body)
    newItem.save((err, savedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })
})


//Update One
creatorRouter.put("/:creatorId", (req, res, next) => {
    Creator.findOneAndUpdate(
        {_id: req.params.creatorId},
        req.body,
        {new: true},
        (err, updatedItem) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updatedItem)
        }
    )
})


//Delete One
creatorRouter.delete("/:itemId", (req, res, next) => {
    Creator.findByIdAndDelete(req.params.itemId, (err, deletedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedItem.name} from the database.`)
    })
})


module.exports = creatorRouter