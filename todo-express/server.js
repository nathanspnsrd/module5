const express = require("express")
const app = express()

app.use(express.json())

app.use("/todo", require("./routes/toDoRouter.js"))


app.listen(9003, () => {
    console.log("I am running on port number 9003.")
})