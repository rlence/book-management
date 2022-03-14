import {Author, Editorial, User, Book, Bookings} from "./index";

export const asyncModel =  async () => {
    try{
        await User.sync({ force: true });
        await Author.sync({ force: true });
        await Editorial.sync({ force: true });
        await Book.sync({ force: true });
        await Bookings.sync({ force: true });

        Bookings.hasMany(User, { foreingKey: 'user_id' , sourceKey: 'id'});
        Bookings.hasMany(Book, { foreingKey: 'book_id' , sourceKey: 'id'});
        Author.hasMany(Book, { foreingKey: 'author_id' , sourceKey: 'id'});
        Editorial.hasMany(Book, { foreingKey: 'editorial_id' , sourceKey: 'id'});

        User.belongsTo(Bookings, { foreingKey: 'user_id' , sourceKey: 'id'});
        Book.belongsTo(Bookings, { foreingKey: 'book_id' , sourceKey: 'id'});
        Book.hasMany(Author, { foreingKey: 'author_id' , sourceKey: 'id'});
        Book.hasMany(Editorial, { foreingKey: 'editorial_id' , sourceKey: 'id'});
        
        console.info("[INFO SYNC TABLES]")
    }catch(err){
        console.log("[ERROR ASYNC MODEL]:", err)
    }
}
