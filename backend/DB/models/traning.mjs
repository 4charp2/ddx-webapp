import {sequelize} from '../initsequlize.mjs';
import { DataTypes } from 'sequelize';

export const Traning = sequelize.define('Traning', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tag_program:{
        type: DataTypes.STRING,
        allowNull:true
    },
    tag_traning:{
        type: DataTypes.STRING,
        allowNull:true
    },
    dificult: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
});