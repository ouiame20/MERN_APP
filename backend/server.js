require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const { Console } = require("console");
const connectDB = require("./config/db");

const authRoutes = require('./routes/authRoutes')

const app = express();

//Middleware to handle CORS
app.use(
    cors({
        origin: process.env.CLIENT_URL || "*",
        mrthods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Ahthorization"],
    })
);

// Connect Database
connectDB();

//MiddleWare
app.use(express.json());


//Routes
app.use("/api/auth", authRoutes);
//app.use("/api/resume", resumeRoutes);


//Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));