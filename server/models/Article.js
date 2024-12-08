const mongoose=require('mongoose')
const articleSchema=new mongoose.Schema({
    title:{
        type:String
    },
    body:{
        type:String
    },
    active:{
        type:Boolean
    }
},{
    timestamps:true

})
module.exports=mongoose.model('Article',articleSchema)