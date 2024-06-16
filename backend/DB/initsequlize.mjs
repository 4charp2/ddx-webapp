import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DataBase, process.env.username, process.env.password, {
    host: process.env.host,
    dialect: process.env.dialect,
    dialectOptions: {
        createDatabaseIfNotExist: true
    }
});


sequelize
    .authenticate()
    .then(() => {
        console.log('✅Подключение к бд успешно.');
    })
    .catch(err => {
        console.error('Ошибка подключения к бд:', err);
    });

export { sequelize };