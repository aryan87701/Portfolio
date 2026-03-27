const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name:{
        type:"String",
        required:true

    },
    email:{
        type:"string",
        required:true

    },
    message:{
        type:"String",
    }
})

const contactModel = new mongoose.model('Portfolio',contactSchema)

module.exports= contactModel