const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectToDB = (async()=>{
console.log("trying to connect DB");
const {connection} = await mongoose.connect(process.env.URL)

if(connection){
    console.log("connected to DB");
}else{
    console.log("failed to connect DB");
    
}
})

module.exports = connectToDB;