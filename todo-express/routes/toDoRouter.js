const express = require("express")
const toDoRouter = express.Router()

const { v4: uuidv4 } = require("uuid")

const toDos = [
    {name: "Clean coop", descriptoin: "pick up poop", imageUrl: "https://images.unsplash.com/photo-1545231160-9f9a3ed14696?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", completed: false, _id: uuidv4()},
    {name: "Pick up clothes", descriptoin: "wash my clothes", imageUrl: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", completed: false, _id: uuidv4()}
]


//Gets All
toDoRouter.get("/", (req, res) => {
    res.send(toDos)
})

//Gets One
toDoRouter.get("/:toDoId", (req, res) => {
    const toDoId = req.params.toDoId
    const foundToDo = toDos.find(toDo => toDo._id === toDoId)
    res.send(foundToDo)
})

//Post One
toDoRouter.post("/", (req, res) => {
    const newToDo = req.body
    newToDo._id = uuidv4()
    toDos.push(newToDo)
    res.send(`Successfull added ${newToDo.name} to the database.`)
})

//Update One
toDoRouter.put("/:toDoId", (req, res) => {
    const toDoId = req.params.toDoId
    const updatedObj = req.body
    const toDoIndex = toDos.findIndex(toDo => toDo._id === toDoId)
    const updatedToDo = Object.assign(toDos[toDoIndex], updatedObj)
    res.send(updatedToDo)
})

//Delete One
toDoRouter.delete("/:toDoId", (req, res) => {
    const toDoId = req.params.toDoId
    const toDoIndex = toDos.findIndex(toDo => toDo._id === toDoId)
    toDos.splice(toDoIndex, 1)
    res.send("Successfully deleted the todo.")
})


module.exports = toDoRouter