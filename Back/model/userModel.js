const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    username:String,
    email:String,
    password:String,
    role:{
        type: String,
        enum: ["customer", "admin"],
        default: "customer"
    }
})

const User = mongoose.model("User",userSchema)
module.exports = User