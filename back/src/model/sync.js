import {Author, Editorial, User, Book, Bookings, BookAuthor} from "./index";

export const asyncModel =  async () => {
    try{
        Bookings.belongsTo(User, { foreingKey: 'user_id' , sourceKey: 'id'});
        Bookings.belongsTo(Book, { foreingKey: 'book_id' , sourceKey: 'id'});

        User.hasMany(Bookings, { foreingKey: 'user_id' , sourceKey: 'id'});
        Book.hasMany(Bookings, { foreingKey: 'book_id' , sourceKey: 'id'});
 
        Editorial.hasMany(Book, { foreingKey: 'editorial_id' , sourceKey: 'id'});
        Book.belongsTo(Editorial, { foreingKey: 'editorial_id' , sourceKey: 'id'});

        BookAuthor.belongsTo(Book, { foreingKey: 'book_id' , sourceKey: 'id'});
        Book.hasMany(BookAuthor, {foreingKey: 'book_id' , sourceKey: 'id'});

        BookAuthor.belongsTo(Author, { foreingKey: 'book_id' , sourceKey: 'id'});
        Author.hasMany(BookAuthor, {foreingKey: 'book_id' , sourceKey: 'id'});
       
        await User.sync({ force: false });
        await Author.sync({ force: false });
        await Editorial.sync({ force: false });
        await Book.sync({ force: false });
        await Bookings.sync({ force: false });
        await BookAuthor.sync({ force: false });

    }catch(err){
        console.log("[ERROR ASYNC MODEL]:", err)
    }
}
