import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoutes.js";

const app = express();

// Load environment variables
dotenv.config({ path: "./config/config.env" });

// CORS configuration
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from the frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow necessary HTTP methods
    credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route handling
app.use('/api/v1/reservation', reservationRouter);

// Database connection
dbConnection();

// Error handling middleware
app.use(errorMiddleware);

app.options('*', cors())
export default app;
