const constant = require('../constants');
const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
    let response = { ...constant.defaultServerResponse };
    try {
        if (!req.headers.authorization) {
            response.message = constant.responseMessage.TOKEN_MISSING;
            return res.status(response.status).send(response);
        }
        const token = (req.headers.authorization.split('bearer')[1].trim());
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY || 'myKey');
        console.log('decodedToken', decodedToken);
        return next();        
    } catch (error) {
        console.log('Error', error);
        response.message = error.message;
        response.status = 401;
    }
    res.status(response.status).send(response);
}

module.exports = {
    validateToken
}