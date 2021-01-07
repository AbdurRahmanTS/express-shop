const auth = require('../models/auth.model');

module.exports.createUser = (userInfo) => {
    return auth.create(userInfo);
}

module.exports.findUserByEmail = (email) => {
    return auth.findOne({email: email});
}
