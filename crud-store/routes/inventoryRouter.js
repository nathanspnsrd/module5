const express = require("express")
const inventoryRouter = express.Router()

const Inventory = require("../models/inventory.js")


//Get All
inventoryRouter.get("/", (req, res, next) => {
    Inventory.find((err, allInventory) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(allInventory)
    })
})

//Get One
inventoryRouter.get("/:inventoryId", (req, res, next) => {
    Inventory.findById(req.params.inventoryId, (err, foundItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundItem)
    })
})

//Get By Creator
inventoryRouter.get("/creator/:creatorId", (req, res, next) => {
    Inventory.find({ creator: req.params.creatorId }, (err, inventory) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventory)
    })
})

//Get items in like range
inventoryRouter.get("/search/byPurchases", (req, res, next) => {
    Inventory.where("timesPurchased").gte(2).exec((err, item) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(item)
    })
})


//Post One
inventoryRouter.post("/:creatorId", (req, res, next) => {
    req.body.creator = req.params.creatorId
    const newItem = new Inventory(req.body)
    newItem.save((err, savedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })
})


//Update One
inventoryRouter.put("/:itemId", (req, res, next) => {
    Inventory.findOneAndUpdate(
        {_id: req.params.itemId},
        req.body,
        {new: true},
        (err, updatedItem) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedItem)
        }
    )
})

//Buy an Item
inventoryRouter.put("/buy/:itemId", (req, res, next) => {
    Inventory.findOneAndUpdate(
        {_id: req.params.itemId},
        {$inc: {timesPurchased: 1}},
        {new: true},
        (err, updatedItem) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedItem)
        }
    )
})


//Delete One
inventoryRouter.delete("/:itemId", (req, res, next) => {
    Inventory.findByIdAndDelete(req.params.itemId, (err, deletedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedItem.name} from the database.`)
    })
})


module.exports = inventoryRouter