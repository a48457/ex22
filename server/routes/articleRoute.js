const express = require("express")
const router = express.Router()
const Article = require("../models/Article");
router.post("/", async (req,res)=>{
const {title} = req.body
const {body} = req.body
const {active} = req.body
const article = await Article.create({title:title,body:body,active:active});
res.json(article)
})
module.exports = router