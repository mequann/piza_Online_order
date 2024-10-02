const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  // Get token from the Authorization header
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    // Changed to 401 for unauthorized access
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      // Log the error for debugging purposes
      console.error('Token verification failed:', err);
      return res.status(401).json({ message: 'Failed to authenticate token' });
    }

    // Attach user data to request object
    req.user = decoded;
    console.log('Authenticated user:', req.user); // Debugging output
    next();
  });
};

module.exports = { authenticate };
