const joi = require('@hapi/joi');

const signUpUserSchema = joi.object({
    email: joi.string().required(),
    password: joi.string().required()
});

const loginUserSchema = joi.object({
    email: joi.string().required(),
    password: joi.string().required()
});

module.exports = {
    signUpUserSchema,
    loginUserSchema
}