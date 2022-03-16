import {Author, Editorial, User, Book, Bookings} from "./index";

export const asyncModel =  async () => {
    try{
        Bookings.belongsTo(User, { foreingKey: 'user_id' , sourceKey: 'id'});
        Bookings.belongsTo(Book, { foreingKey: 'book_id' , sourceKey: 'id'});
        
        Author.hasMany(Book, { foreingKey: 'author_id' , sourceKey: 'id'});
        Editorial.hasMany(Book, { foreingKey: 'editorial_id' , sourceKey: 'id'});

        User.hasMany(Bookings, { foreingKey: 'user_id' , sourceKey: 'id'});
        Book.hasMany(Bookings, { foreingKey: 'book_id' , sourceKey: 'id'});
        
        Book.belongsTo(Author, { foreingKey: 'author_id' , sourceKey: 'id'});
        Book.belongsTo(Editorial, { foreingKey: 'editorial_id' , sourceKey: 'id'});

        await User.sync({ force: false });
        await Author.sync({ force: false });
        await Editorial.sync({ force: false });
        await Book.sync({ force: false });
        await Bookings.sync({ force: false });

    }catch(err){
        console.log("[ERROR ASYNC MODEL]:", err)
    }
}
