export const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API',
            version: '1.0.0',
            description: 'API Dev app',
            contact: {
                name: 'Contact me',
                url: 'https://t.me/aandrushik'
            },
            servers: [
                {
                    url: 'http://localhost:3006'
                }
            ]
        }
    },
    apis: [
        './routes/*.mjs',
        './routes/users/*.mjs',
        './routes/category/*.mjs',
        './routes/programs/*.mjs',
        './routes/traning/*.mjs'
    ],
};
