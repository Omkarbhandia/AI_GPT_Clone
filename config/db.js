const mongoose = require('mongoose')
const colors = require('colors')


const connectDb = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Connected to MongoDB Database ${mongoose.connection.host} ` .bgGreen.white)
    } catch (error) {
        console.log(`Database Connection Error ${error}` .bgRed.white)
    }
}

module.exports = connectDb; 