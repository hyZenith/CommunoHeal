const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Import the User model    

exports.protect = async (req, res, next) => {
    let token = req.headers.authorization?.split(" ")[1]; // Extract token from the Authorization header    
    if (!token) return res.status(401).json({ message: "Not authorized, no token" }); // If no token, return unauthorized response

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token using the secret key
        req.user = await User.findById(decoded.id).select("-password"); // Find the user by ID and exclude the password field
        next();
    } catch(err) {
        res.status(401).json({ message: "Not authorized, token failed" }); // If token verification fails, return unauthorized response
    }
};