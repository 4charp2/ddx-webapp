import {sequelize} from '../initsequlize.mjs';
import { DataTypes } from 'sequelize';

export const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tag_category:{
        type: DataTypes.STRING,
        allowNull:true
    },
    video: {
        type: DataTypes.STRING,
        allowNull: true
    }
});