const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { type: String }, 
    email: { type: String}, 
    age: { type: Number }, 
    username: { type: String }, 
    password: { type: String }
    }, { timestamp: true })

var model = mongoose.model('User', userSchema)
module.exports = model