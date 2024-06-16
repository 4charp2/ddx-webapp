import {sequelize} from '../initsequlize.mjs';
import { DataTypes } from 'sequelize';

export const Programs = sequelize.define('Programs', {
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
    tag_category:{
        type: DataTypes.STRING,
        allowNull:true
    },
    description:{
        type: DataTypes.STRING,
        allowNull:true
    },
    dificult:{
        type: DataTypes.STRING,
        allowNull:true
    },
    weeks:{
        type: DataTypes.JSON,
        allowNull:true
    }
});