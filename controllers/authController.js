const User = require('../models/User');

module.exports.signupGet = (req, res) => {
    res.send("signupGet");
}

module.exports.signupPost = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);

    try {
        const user = await User.create({ email, password });
        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        res.status(400).send('Error Signup failed');
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