const mongoose = require("mongoose");
var url = 'mongodb+srv://System:root@cluster0.xexia.mongodb.net/Kids-Stationery'
mongoose.connect(url,
    {
        useUnifiedTopology:true,
        useNewUrlParser:true
    })
var database = mongoose.connection
database.on('connected',()=>{
    console.log(`Mongodb Connection successful`);
})
database.on('error', ()=>{
    console.log(`Mongodb Connection Failed`);
})
module.exports = mongoose;