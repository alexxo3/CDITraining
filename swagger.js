const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger options
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'CDI24 API Documentation',
            version: '1.0.0',
            description: 'API documentation for the CDI24 platform',
        },
        servers: [
            {
                url: 'http://localhost:5000', // Adjust to your actual server URL
                description: 'Local server',
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ['./routes/*.js'], // Adjust this path to your route files
};

// Swagger spec and setup
const swaggerSpec = swaggerJSDoc(options);
function setupSwagger(app) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = setupSwagger;
