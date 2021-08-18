const joi = require('@hapi/joi');
const constant = require('../constants')

const validateObjectSchema = (data, schema) => {
    const result = joi.validate(data, schema);
    const errorDetails = result.error == null ? null : result.error.details.map(value => {
        return{
            message: value.message,
            path: value.path
        }
    })
    return errorDetails;
}

const validateBody = (schema) => {
    return(req, res, next) => {
        let response = {...constant.defaultServerResponse};
        let errorDetails = validateObjectSchema(req.body, schema);
        if(errorDetails) {
            response.body = errorDetails;
            response.message = constant.responseMessage.INVALID_DATA_FIELD;
            return res.status(response.status).send(response);
        }
        next();
    }
}

const validateQueryParams = (schema) => {
    return(req, res, next) => {
        let response = {...constant.defaultServerResponse};
        let errorDetails = validateObjectSchema(req.query, schema);
        if(errorDetails) {
            response.body = errorDetails;
            response.message = constant.responseMessage.INVALID_DATA_FIELD;
            return res.status(response.status).send(response);
        }
        next();
    }
}

module.exports = {
    validateBody,
    validateQueryParams
}