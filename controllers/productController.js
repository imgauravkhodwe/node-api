const productService = require('../services/productService')
const constant = require('../constants');

const createProduct = async (req, res) => {
    let response = { ...constant.defaultServerResponse }
    try {
        const serviceResponse = await productService.createProduct(req.body);
        response.status = 200;
        response.message = constant.responseMessage.SUCCESSFUL;
        response.body = serviceResponse;
    } catch (error) {
        console.log('Something went wrong. Controller: createproduct', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

const getAllProducts = async (req, res) => {
    let response = { ...constant.defaultServerResponse }
    try {
        const serviceResponse = await productService.getAllProducts(req.query);
        response.status = 200;
        response.message = constant.responseMessage.SUCCESSFUL;
        response.body = serviceResponse;
    } catch (error) {
        console.log('Something went wrong. Controller: getAllProducts', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

const getProductById = async (req, res) => {
    let response = { ...constant.defaultServerResponse }
    try {
        const serviceResponse = await productService.getProductById(req.params);
        response.status = 200;
        response.message = constant.responseMessage.SUCCESSFUL;
        response.body = serviceResponse;
    } catch (error) {
        console.log('Something went wrong. Controller: getProductById', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

const updateProductById = async (req, res) => {
    let response = { ...constant.defaultServerResponse }
    try {
        const serviceResponse = await productService.updateProductById({
            id: req.params.id,
            updateInfo: req.body
        });
        response.status = 200;
        response.message = constant.responseMessage.SUCCESSFUL;
        response.body = serviceResponse;
    } catch (error) {
        console.log('Something went wrong. Controller: updateProductById', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

const deleteProductById = async (req, res) => {
    let response = { ...constant.defaultServerResponse }
    try {
        const serviceResponse = await productService.deleteProductById(req.params);
        response.status = 200;
        response.message = constant.responseMessage.SUCCESSFUL;
        response.body = serviceResponse;
    } catch (error) {
        console.log('Something went wrong. Controller: deleteProductById', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById
}