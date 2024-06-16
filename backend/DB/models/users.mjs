import {sequelize} from '../initsequlize.mjs';
import { DataTypes } from 'sequelize';

export const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    user_name:{
        type: DataTypes.STRING,
        allowNull:true
    },
    training: {
        type: DataTypes.JSON,
        allowNull: true
    }
});