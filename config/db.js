const mongoose = require("mongoose");

const connectDB = async () =>{
    try{
        await mongoose.connect('mongodb+srv://db_user:GVVAEnpyuyb6Fpvp@dev.mrzny.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB Connected..");
    }catch(err){
        console.error(err.message);
        // Exit the process with failure
        process.exit(1);
    }
};

module.exports = connectDB;