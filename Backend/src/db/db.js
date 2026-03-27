const mongoose = require("mongoose")

async function connectDB(){
    try {
        await mongoose.connect(`${process.env.MONGO_DB_URI}/pform`)
        console.log({
            success:"true",
            message:"DB conected successfully"
        })
    } catch (error) {
        console.log({
            success:"false",
            message:error
        })
    }
}
module.exports = connectDB