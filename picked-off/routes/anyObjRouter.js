const express = require("express")
const anyObjRouter = express.Router()

const objOfAnyKind = {name: "I am an object of any kind."}

anyObjRouter.use("/", (req, res, next) => {
    console.log("The items middleware was executed")
    next()
})

anyObjRouter.use("/", (req, res, next) => {
    req.body = {name: "I am still an object."}
    next()
})

anyObjRouter.get("/", (req, res, next) => {
    console.log("Get request recieved.")
    res.send(req.body)
})



module.exports = anyObjRouter