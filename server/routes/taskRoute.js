const express = require("express")
const router = express.Router()
const Task = require("../models/Task");
router.post("/", async (req,res)=>{
const {title} = req.body
if(!title){
    return res.send("Please enter a title")
}
const task = await Task.create({title:title})
res.json(task)
})
module.exports = router