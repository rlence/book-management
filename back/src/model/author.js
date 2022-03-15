import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const Author = sequelize.define('Author', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    authorName:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
},{
    tableName: 'author',
    timestamps: false,
});

export default Author;
