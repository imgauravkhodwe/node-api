const Product = require('../Database/models/productModel');
const DBUtil = require('../utils/DBUtil');
const constant = require('../constants');

const createProduct = async (productData) => {
    try {
        let product = new Product({ ...productData });
        let result = await product.save();
        return DBUtil.formateResponse(result);
    } catch (error) {
        throw new Error(error);
    }
}

const getAllProducts = async ({ skip = 0, limit = 0 }) => {
    try {
        let products = await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit));
        return DBUtil.formateResponse(products);
    } catch (error) {
        throw new Error(error);
    }
}

const getProductById = async ({ id }) => {
    try {
        DBUtil.validateObjectId(id);
        let product = await Product.findById(id);
        if (!product) {
            throw new Error(constant.responseMessage.NOT_FOUND)
        }
        return DBUtil.formateResponse(product);
    } catch (error) {
        throw new Error(error);
    }
}

const updateProductById = async ({ id, updateInfo }) => {
    try {
        DBUtil.validateObjectId(id);
        let product = await Product.findOneAndUpdate(
            { "_id": id },
            updateInfo,
            { new: true }
        );
        if (!product) {
            throw new Error(constant.responseMessage.NOT_FOUND)
        }
        return DBUtil.formateResponse(product);
    } catch (error) {
        throw new Error(error);
    }
}

const deleteProductById = async ({ id }) => {
    try {
        DBUtil.validateObjectId(id);
        let product = await Product.findByIdAndDelete(id);
        if (!product) {
            throw new Error(constant.responseMessage.NOT_FOUND)
        }
        return DBUtil.formateResponse(product);
    } catch (error) {
        throw new Error(error);
    }
}


module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById
}