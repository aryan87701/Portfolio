const express = require('express')
require('dotenv').config()
const app = express()

const connectDB = require('./db/db')
const cors = require('cors')
const contactModel = require('./models/contact.model')
app.use(cors({
    origin:"https://portfolio-aryan87701s-projects.vercel.app/"
}))
app.use(express.json())
connectDB()

app.post('/contact',async(req,res)=>{
    await contactModel.create(req.body)

    res.status(200).json({
        success:"true",
        message:"sent sucessfully"
    })
    
})

module.exports = app