require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path  = require("path");
const connectDB = require("./config/db"); // Import the database connection function
const authRoutes = require("./routes/authRoutes"); // Import authentication routes
const app = express();

//Middleware to handle CORS
app.use(
    cors({
        origin: process.env.CLIENT_URL || "*", // Replace with your client URL
        methods :["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

// Add body-parsing middleware
app.use(express.json()); // Parses incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data

connectDB(); // Call the function to connect to the database

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!", error: err.message });
});
// Ensure middleware is placed before routes
app.use("/api/v1/auth", authRoutes); // Authentication routes



const PORT = process.env.PORT || 5000; // Port for the server to listen on
app.listen(PORT, () => console.log(`Server is running on port  ${PORT}`)); // Log to console when server starts
