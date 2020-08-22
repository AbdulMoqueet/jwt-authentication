const User = require('../models/User');

const errorHandler = (err) => {

    const errors = { email: '', password: '' };

    if(err.code === 11000){
        errors.email = 'This email is already registered';
        return errors;
    }

    if (err.message.includes('user validation failed')) {

        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });

    }

    return errors;

}

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
        res.status(400).json(errorHandler(err));
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