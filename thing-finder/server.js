const express = require("express")
const app = express()


app.use(express.json())

app.use("/hobbies", require("./routes/hobbyRouter.js"))


app.listen(9001, () => {
    console.log("This server is running on port 9001.")
})