const userService = require('../services/userService');
const constant = require('../constants');


const signUpUser = async (req, res) => {
    let response = { ...constant.defaultServerResponse }
    try {
        const serviceResponse = await userService.signUpUser(req.body);
        response.status = 200;
        response.message = constant.responseMessage.SUCCESSFUL;
        response.body = serviceResponse;
    } catch (error) {
        console.log('Something went wrong. Controller: signUpUser', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

const loginUser = async (req, res) => {
    let response = { ...constant.defaultServerResponse }
    try {
        const serviceResponse = await userService.loginUser(req.body);
        response.status = 200;
        response.message = constant.responseMessage.SUCCESSFUL;
        response.body = serviceResponse;
    } catch (error) {
        console.log('Something went wrong. Controller: loginUser', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

module.exports = {
    signUpUser,
    loginUser
}