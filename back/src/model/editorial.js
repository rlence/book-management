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
        allowNull: false,
        unique: true
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
   
},{
    tableName: 'editorial',
    timestamps: true,
});

export default Editorial;