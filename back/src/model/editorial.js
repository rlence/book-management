import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const Editorial = sequelize.define('Editorial', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    editorialName:{
        type: DataTypes.STRING,
        allowNull: false
    },
   
},{
    tableName: 'editorial',
    timestamps: false,
});

export default Editorial;