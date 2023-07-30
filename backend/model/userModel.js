const mongoose = require('mongoose')

const user = mongoose.Schema({

    username:{
        type:String,
        required:true
    },
    about:{
        type:String,
    },
    email:{
        type:String,
        required:true
    },
    DOB:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    
})

module.export = mongoose.model("User",user);