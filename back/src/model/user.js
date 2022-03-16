import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const User = sequelize.define('User', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phone:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    nif:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
   
},{
    tableName: 'user',
    timestamps: true,
});

export default User;