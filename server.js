const express = require('express');
const dotEnv = require('dotenv');
const dbConnection = require('./database/connection');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const cors = require('cors');
const swaggerDocument = YAML.load('./swagger.yaml');



dotEnv.config();


const app = express();

// db connectivity
dbConnection();

const PORT = process.env.PORT || 3000;

// Apply middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// API documentation
app.use('/api-docs', swaggerUi.serve , swaggerUi.setup(swaggerDocument));

// load all rooutes
app.use('/api/v1/product', require('./routes/productRoute'));
app.use('/api/v1/user', require('./routes/userRoute'));


app.get('/', (req, res, next) =>{
    res.send(`Server is up and running!`);
})

app.listen(PORT,() =>{
    console.log(`Server is up and running on ${PORT}`);
})

// Global error handler middleware
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send({
        status: 500,
        message: err.message,
        body: {}
    });
  })
