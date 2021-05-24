const mongoose=require("mongoose");
const blogSchema= mongoose.Schema({
    title:{
        type:"String",
    },
    img:{
        type:"String"
    },
    desc:{
        type:"String"
    },
    category:{
        type:"String"
    },
    date:{
        type: Date
    },
    comments:[
        {
            type:mongoose.ObjectId,
            ref:"comments"
        }
    ]
    
})
const blogs=new mongoose.model("blogs",blogSchema);
module.exports=blogs;