const User = require("../models/User")

const jwt  = require("jsonwebtoken"); // Import the jsonwebtoken library


//generate JWT token
const generateToken = (id) => {
    return jwt.sign({id},
        process.env.JWT_SECRET, {expiresIn: "1h"}
    );
}

//Register user
exports.registerUser = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: "Request body is missing" });
    }

    const {email, password} = req.body; // Destructure email and password from the request body

    //Validation: check for missing fields
    if (!email || !password) {
        return res.status(400).json({message: "Please fill in all fields"});
    }

    try{
        // Check if user already exists
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({message: "User already exists"});
        }

        //create the user
        const user = await User.create({
            email,
            password
        });
        
        res.status(201).json({
            id: user._id,
            user,
            token: generateToken(user._id) // Generate JWT token for the user
        });
    }
    catch(err){
        res.status(500).json({message: "Server error", error: err.message});
    }
};

// Login User
exports.loginUser = async (req, res) => {
    const {email, password} = req.body; // Destructure email and password from the request body
    if (!email || !password) {
        return res.status(400).json({message: "Please fill in all fields"});
    }   
    try {
        const user = await User.findOne({email});
        if (!user || !await user.matchPassword(password)) {
            return res.status(400).json({message: "Invalid email or password"});
        }
        res.status(200).json({
            id: user._id,
            user,
            token: generateToken(user._id) 
        });
    }
    
    catch(err){
        res.status(500).json({message: "Error registering User", error: err.message});
    }
};

//
exports.getUserInfo = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password"); // Exclude password from the response
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user); // Send the user information as a response
    } catch(err) {
        res.status(500).json({ message: "Error fetching user information", error: err.message });
    }
};
