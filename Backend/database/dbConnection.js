import mongoose from "mongoose"
import dotenv from "dotenv";

dotenv.config();

export const dbConnection=()=>{
    mongoose.connect("mongodb://localhost:27017/RESTAURENTAPP",{
        useNewUrlParser: "true",
  useUnifiedTopology: "true"
    }).then(()=>{
        console.log("Connected to database successfully")
    }).catch(error=>{
        console.log(`Some error occured while connecting to database! ${error}`)
    })
}