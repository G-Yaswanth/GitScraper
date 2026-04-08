// I am using this file for connecting to MongoDB Compass using mongoose library

import mongoose from 'mongoose';

async function connectToDB(){
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB successfully!");
    }
    catch(err){
        console.error("Error in connecting to MongoDB: ", err);
        return;
    }
}



export default connectToDB;