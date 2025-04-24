import express from "express";
import dotenv from 'dotenv';
import databaseConnection from "./utils/database.js"
import cookieParser from 'cookie-parser';
import userRoute from './routes/userRoute.js';
import cors from 'cors';



dotenv.config({
    path: ".env"
})


databaseConnection();

const app =express();

//middlewares: 
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"))

const corsOptions = {
     origin:'https://sagarminor-1.onrender.com',
     credentials: true
}



//api 
app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT, () => {
      console.log(`server listen at Port ${process.env.PORT}`);
})

