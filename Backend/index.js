import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from 'cors';
import route from "./Routes/UserRoute.js";
const app=express();
app.use(cors());
app.use(bodyParser.json());
dotenv.config();

const PORT=process.env.PORT ||1000;
const MONGOURL=process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(()=>{
    console.log("MongoDB Connected to Search.")
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
    })

}).catch((error)=>console.log(error));

app.use("/api/Document",route)



