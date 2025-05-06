import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";


// app config

const app = express();
const port = 4000;

// middleware
app.use(express.json()); // using this middleware get request froented to backend parse using this json formate
app.use(cors());        // this middleware we can access backend from any froentend

// add db connections
connectDB(); 

// api endpoint
app.use("/api/food",foodRouter)

// bacekd though upload image send in froentend 
app.use("/images",express.static('uploads'))


// http methods using that  we can request data from server, more method update, post, delete
app.get("/",(req,res)=>{
    res.send("API Working")
}) 


//  express server run
app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
});



