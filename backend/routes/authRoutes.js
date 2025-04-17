const express = require("express");

const {protect} = require("../middleware/authMiddleware"); // Import the protect middleware for authentication

const {
    registerUser,
    loginUser,
    getUserInfo,
    // getUserInfo
} = require('../controlles/authController'); // Import the controller functions

const router = express.Router();

router.post("/register", registerUser); // Route for user registration

router.post("/login", loginUser); // Route for user login   

router.get("/getUser", protect, getUserInfo); // Route to get user information  

module.exports = router; // Export the router for use in other files