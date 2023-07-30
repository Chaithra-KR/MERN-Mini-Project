const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')

//setting routers
const userRouter = require("./routers/userRouter")
const adminRouter = require("./routers/adminRouter")
app.set("/admin",adminRouter)
app.set("/",userRouter)


//cors
app.use(express.json());
app.use(cors({
    origin:[process.env,CORS_ORIGIN],
    methods:['GET','POST'],
    credentials:true,
    allowedHeaders:['Content-Type','Access']
}))

//connecting mongoose
mongoose.connect(process.env.MONGO)
.then((res)=>{
    console.log("Database connected");
}).catch((err)=>{
    console.log(err);
})


//setting port
let PORT = 4000;
app.listen(PORT,(req,res)=>{
    console.log("server is running");
})

