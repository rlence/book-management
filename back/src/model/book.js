import {Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const Book = sequelize.define('Book', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    genre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    publicationDate:{
        type: DataTypes.DATE,
        allowNull: false
    },
    editorialId:{
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
},{
    tableName: 'book',
    timestamps: true,
});


export default Book;