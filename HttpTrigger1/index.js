const jwt = require('jsonwebtoken');

module.exports = async function (context, req) {
    const { username, password } = req.body;

    // Ensure username and password are provided
    if (!username || !password) {
        context.res = { status: 400, body: "Username and password are required" };
        return;
    }

    // Regular Expression for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
        context.res = { status: 400, body: "Invalid email format" };
        return;
    }

    // Use environment variable for JWT secret key
    const secretKey = process.env.JWT_SECRET || 'fallback_secret_key';

    // Generate JWT token
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });

    context.res = { status: 200, body: { token } };
}