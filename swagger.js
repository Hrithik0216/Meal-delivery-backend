const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const route = require('./src/Route/route');
const db = require('./Database/database');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use(route);

// Swagger setup
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Restaurant Api',
            version: '1.0.0',
        },
        servers: [{
            url: 'http://localhost:3000'
        }]
    },
    apis: ['./src/Route/route.js'],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

module.exports = app;
