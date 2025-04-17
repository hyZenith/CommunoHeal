require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path  = require("path");
const connectDB = require("./config/db"); // Import the database connection function
const authRoutes = require("./routes/authRoutes"); // Import authentication routes
const app = express();

// Add detailed request logging middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    next();
});

// CORS configuration
const corsOptions = {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept", "Origin"],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204
};

// Apply CORS middleware before other middleware
app.use(cors(corsOptions));

// Add body-parsing middleware
app.use(express.json()); // Parses incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data

connectDB(); // Call the function to connect to the database

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ message: "Something went wrong!", error: err.message });
});

// Ensure middleware is placed before routes
app.use("/api/v1/auth", authRoutes); // Authentication routes

const PORT = process.env.PORT || 5000; // Port for the server to listen on
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log('CORS enabled for:', corsOptions.origin);
});
