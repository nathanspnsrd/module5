const express = require("express")
const app = express()

const morgan = require("morgan")
const mongoose = require("mongoose")


//Connect to DB
mongoose.connect("mongodb://localhost:27017/inventoriesdb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
    () => console.log("Connected to the DB.")
)


//Middleware
app.use(express.json())
app.use(morgan("dev"))


//Routes
app.use("/inventory", require("./routes/inventoryRouter.js"))


//Error Handling
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

//Server Listen
app.listen(9005, () => {
    console.log("The server is running on port 9005.")
})