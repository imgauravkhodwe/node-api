const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const userSchema = require('../schema/userSchema');


router.post('/signup', joiSchemaValidation.validateBody(userSchema.signUpUserSchema), userController.signUpUser);
router.post('/login', joiSchemaValidation.validateBody(userSchema.loginUserSchema), userController.loginUser);

module.exports = router;