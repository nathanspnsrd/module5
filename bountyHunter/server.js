const express = require("express")
const app = express()

const morgan = require("morgan")
const mongoose = require("mongoose")


//Connect to DB
mongoose.connect("mongodb://localhost:27017/bountiesdb",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
() => console.log("Connected to the DB.")
)


//Middleware (for each request)
app.use(express.json())
app.use(morgan("dev"))


//Routes
app.use("/bounties", require("./routes/bountyRouter.js"))


//Error Handling
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


//Server Listen
app.listen(9000, () => {
    console.log("The server is running on port 9000")
})