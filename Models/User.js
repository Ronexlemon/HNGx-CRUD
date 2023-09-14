const mongoose = require('mongoose');

const Userschema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId ,
    username:{
        required:true,
        type:String
    },
})

module.exports = mongoose.model("UserData",Userschema);