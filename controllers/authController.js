const User = require('../models/User');
const authErrors = require('./Errors/authErrors');

module.exports.signupGet = (req, res) => {
    res.send("signupGet");
}

module.exports.signupPost = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);

    try {
        const user = await User.create({ email, password });
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json(authErrors.errorHandler(err));
    }

}

module.exports.loginGet = (req, res) => {
    res.send("loginGet");
}

module.exports.loginPost = (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    res.send("loginPost");
}