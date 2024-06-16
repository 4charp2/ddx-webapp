import express from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { sequelize } from './DB/initsequlize.mjs';
import './DB/sinc.mjs';

//socketio
import http from 'http';
import { Server } from 'socket.io';
import { configureSocket } from './sockets/socket.mjs';


const app = express();
const port = 3011;


const server = http.createServer(app);

// Настройка Socket.IO
const io = new Server(server);
configureSocket(io);


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



//telegram
import {bot} from './bot/bot.mjs'
bot.expressApp = app;
import './bot/func/commands.mjs'

//api
import apiRoutes from './routes/api.mjs';
app.use(apiRoutes);



//users

import usersADDRoute from './routes/users/add.mjs';
app.use('/api/users', usersADDRoute)


import usersGetRoute from './routes/users/get.mjs';
app.use('/api/users', usersGetRoute)


import categoryADDRoute from './routes/category/add.mjs'
app.use('/api/category', categoryADDRoute)


import categoryGETRoute from './routes/category/get.mjs'
app.use('/api/category', categoryGETRoute)



import ProgramADDRoute from './routes/programs/add.mjs'
app.use('/api/programs', ProgramADDRoute)

import ProgramGetRoute from './routes/programs/get.mjs'
app.use('/api/programs', ProgramGetRoute)

import TraningAddRoute from './routes/traning/add.mjs'
app.use('/api/training', TraningAddRoute)


import TraningGETRoute from './routes/traning/get.mjs'
app.use('/api/training', TraningGETRoute)



if (process.env.NODE_ENV !== 'test') {
    server.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

export default app;
