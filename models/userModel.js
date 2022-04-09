const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fname : {type: String , require},
    lname : {type: String , require},
    email : {type: String , require},
    password : {type: String , require},
    isAdmin : {type: Boolean , require , default: false},
} , {
    timestamps : true,
})

module.exports = mongoose.model('users' , userSchema)