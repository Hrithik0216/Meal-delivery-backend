const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger');
const route = require('./src/Route/route');
const db = require('./Database/database');

const app = express();

// Middleware
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(express.json());

// Routes
app.use(route);

module.exports = app;
