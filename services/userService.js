const User = require('../database/models/userModel');
const DBUtil = require('../utils/DBUtil');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const signUpUser = async ({ name, email, password }) => {
    try {
        const user = await User.findOne({ email });
        if(user) {
            throw new Error('User already exists');
        } else {
        password = await bcrypt.hash(password, 12);
        let user = new User({ name, email, password });
        let result = await user.save();
        return DBUtil.formateResponse(result);
        }
    } catch (error) {
        throw new Error(error);
    }
}

const loginUser = async ({ email, password }) => {
    try {
        let user = await User.findOne({ email });
        if(!user) {
            throw new Error('User do not exists, need to signup'); 
        }
        if(await bcrypt.compare(password, user.password)){
            const token = jwt.sign({ id: user._id}, process.env.SECRET_KEY || 'myKey', {expiresIn: '1d' })
            return { token }; 
        } else {
            throw new Error('Invalid password');
        }        
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    signUpUser,
    loginUser
}