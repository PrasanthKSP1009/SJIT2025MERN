const mdb = require('mongoose')

const signupSchema = mdb.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    phoneNumber:Number,
})

const signup_schema = mdb.model("signup",signupSchema)
module.exports = signup_schema