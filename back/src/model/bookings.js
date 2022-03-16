import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const Bookings = sequelize.define('Bookings', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    bookId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pickUpDate:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    deliveryDate:{
        type: DataTypes.DATE,
        allowNull: false
    },
    dateDelivered: {
        type: DataTypes.DATE,
        allowNull: true
    }
   
},{
    tableName: 'bookings',
    timestamps: true,
});

export default Bookings;