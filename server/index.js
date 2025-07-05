import express from "express";
import dotenv from 'dotenv';
import databaseConnection from "./utils/database.js"
import cookieParser from 'cookie-parser';
import userRoute from './routes/userRoute.js';
import cors from 'cors';



dotenv.config({
    path: "./.env"
})


databaseConnection();

const app =express();

//middlewares: 
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"))

// CORS configuration
const corsOptions = {
     origin: function(origin, callback) {
         const allowedOrigins = process.env.CORS_ORIGIN 
             ? process.env.CORS_ORIGIN.split(',').map(url => url.trim())
             : ['http://localhost:5173', 'http://localhost:3000', 'https://sagarminor.onrender.com'];
         
         // Allow requests with no origin (like mobile apps or curl requests)
         if (!origin) return callback(null, true);
         
         if (allowedOrigins.indexOf(origin) !== -1) {
             callback(null, true);
         } else {
             callback(new Error('Not allowed by CORS'));
         }
     },
     credentials: true,
     optionsSuccessStatus: 200,
     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
     allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Cache-Control', 'Pragma'],
     exposedHeaders: ['Set-Cookie']
}

app.use(cors(corsOptions))

// Handle preflight requests
app.options('*', cors(corsOptions));

// Debug middleware to log CORS issues
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - Origin: ${req.headers.origin || 'No origin'}`);
    next();
});

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