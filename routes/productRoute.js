const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const productSchema = require('../schema/productSchema');
const tokenValidation = require('../middleware/tokenValidation');


router.post('/', tokenValidation.validateToken, joiSchemaValidation.validateBody(productSchema.createProductSchema), productController.createProduct);
router.get('/', tokenValidation.validateToken, joiSchemaValidation.validateQueryParams(productSchema.getAllProducts), productController.getAllProducts);
router.put('/:id', tokenValidation.validateToken, joiSchemaValidation.validateBody(productSchema.updateProductSchema), productController.updateProductById)
router.get('/:id', tokenValidation.validateToken, productController.getProductById);
router.delete('/:id', tokenValidation.validateToken, productController.deleteProductById);

module.exports = router;