module.exports.errorHandler = (err) => {

    const errors = { email: '', password: '' };

    if (err.code === 11000) {
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