const jwt=require("jsonwebtoken");

function authenticateToken(user) {
const payload = { 
    id: user._id,
    username: user.username,
    email: user.email,
    role: user.role // Default to "NORMAL" if no role is provided
 };
return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
}

function verifyToken(token) {
    try {
        if(!token) {
            return null; // No token provided
        }
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return null; // Token is invalid or expired
    }
    }

module.exports = {authenticateToken, verifyToken};