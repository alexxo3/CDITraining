const jwt = require('jsonwebtoken');

const verifyAdminToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Get the token from 'Bearer <token>'

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded user info to request object
    next();
  } catch (err) {
    console.error('Token verification error:', err); // Log the error
    return res.status(401).json({ message: 'Token is not valid' });
  }
};

const authRole = (role) => {
  return (req, res, next) => {
    // Check if user role matches the required role
    if (req.user && req.user.role === role) {
      return next();
    } else {
      return res.status(403).json({ message: 'Forbidden: Access denied' });
    }
  };
};

module.exports = { verifyAdminToken, authRole };
