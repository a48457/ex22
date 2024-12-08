require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose=require('mongoose')
const corsOptions = require("./config/corsOptions")
const connectDB = require("./config/dbConn")
connectDB()
const PORT = process.env.PORT || 7001
const app = express()
app.use(cors(corsOptions))
app.use(express.json())
app.use("/api/tasks", require("./routes/taskRoute"))
app.use("/api/articles", require("./routes/articleRoute"))
app.get("/",(req,res)=>{
res.send("this is the home page")
})


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port
    ${PORT}`))
    })
    mongoose.connection.on('error', err => {
    console.log(err)
    })