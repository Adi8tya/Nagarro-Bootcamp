const mongoose = require('mongoose');
const commentsSchema=mongoose.Schema({
    title:{
        type: 'string'
    },
    desc:{
        type:'string'
    },
    date:{
        type:Date
    }

})

const comments=mongoose.model('comments',commentsSchema);
module.exports=comments;