import express from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';


const app = express();
const port = 3006;


//Swagger
import { swaggerOptions } from './options/swaggerOptions.mjs';
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// Настройка базовой аутентификации
// app.use('/api-docs', basicAuth({
//     users: { 'admin': 'password' }, // Задайте имя пользователя и пароль
//     challenge: true, // Включите режим запроса учетных данных
//     unauthorizedResponse: 'Unauthorized' // Сообщение об ошибке при неудачной аутентификации
// }), swaggerUi.serve, swaggerUi.setup(swaggerDocs));






app.use(express.json());


//api
import apiRoutes from './routes/api.mjs';
app.use(apiRoutes);




//users








if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

export default app;
