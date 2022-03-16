import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const BookAuthor = sequelize.define('BookAutor', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    authorId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    bookId:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    tableName: 'book_author',
    timestamps: true,
});

export default BookAuthor;