const joi = require('@hapi/joi');

const createProductSchema = joi.object({
    name: joi.string().required(),
    brand: joi.string().required(),
    price: joi.number().required()
});

const getAllProducts = joi.object({
    skip: joi.string(),
    limit: joi.string()
});

const updateProductSchema = joi.object({
    name: joi.string(),
    brand: joi.string(),
    price: joi.number()
});

module.exports = {
    createProductSchema,
    getAllProducts,
    updateProductSchema
}