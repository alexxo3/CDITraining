const jwt = require('jsonwebtoken');

// Middleware to authenticate JWT tokens
const authenticateToken = (req, res, next) => {
    const token = req.cookies.token; // Assume the token is stored in cookies

    if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });
        req.user = user; // Store user information in request object
        next();
    });
};

// Middleware for role-based authorization
const authorizeRole = (allowedRoles) => {
    return (req, res, next) => {
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
        }
        next();
    };
};

module.exports = { authenticateToken, authorizeRole };
