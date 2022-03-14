import {Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const Book = sequelize.define('Book', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    bookName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    gender:{
        type: DataTypes.STRING,
        allowNull: false
    },
    amount:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    publicationDate:{
        type: DataTypes.DATE,
        allowNull: false
    },
    authorId:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    editorialId:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},{
    tableName: 'book',
    timestamps: false,
});


export default Book;