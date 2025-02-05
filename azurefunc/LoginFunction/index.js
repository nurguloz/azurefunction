const jwt = require('jsonwebtoken');

module.exports = async function (context, req) {
    const { username, password } = req.body;

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)) {
        context.res = { status: 400, body: "Invalid email format" };
        return;
    }

    // Generate JWT
    const token = jwt.sign({ username }, 'secret_key', { expiresIn: '1h' });
    context.res = { status: 200, body: { token } };
};

