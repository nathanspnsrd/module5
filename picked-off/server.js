const express = require("express")
const app = express()

app.use(express.json())

app.use("/any", require("./routes/anyObjRouter.js"))


app.listen(9002, () => {
    console.log("This server is running on port 9002.")
})
