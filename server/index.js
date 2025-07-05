import express from "express";
import dotenv from 'dotenv';
import databaseConnection from "./utils/database.js"
import cookieParser from 'cookie-parser';
import userRoute from './routes/userRoute.js';
import cors from 'cors';



dotenv.config({
    path: "../.env"
})


databaseConnection();

const app =express();

//middlewares: 
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"))

// Additional security and CORS handling
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma');
    
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
        return res.status(200).send();
    }
    next();
});

const corsOptions = {
     origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : ['http://localhost:5173', 'http://localhost:3000', 'https://sagarminor.onrender.com'],
     credentials: true,
     optionsSuccessStatus: 200,
     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
     allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
}

app.use(cors(corsOptions))

//api 
app.use("/api/v1/user", userRoute);

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'OK', 
        message: 'Server is running',
        cors: 'enabled',
        timestamp: new Date().toISOString()
    });
});

app.listen(process.env.PORT, () => {
      console.log(`server listen at Port ${process.env.PORT}`);
})

export { app }