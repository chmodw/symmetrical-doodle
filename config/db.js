const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB Connected..");
    }catch(err){
        console.error(err.message);
        // Exit the process with failure
        process.exit(1);
    }
};

module.exports = connectDB;