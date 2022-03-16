import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const Author = sequelize.define('Author', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }

},{
    tableName: 'author',
    timestamps: true,
});

export default Author;
