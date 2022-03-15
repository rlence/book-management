import { Author } from "../../model/index";
import sequelize from "../../config/sequelize";

export const getAuthors = () => {
    return Author.findAll();
}

export const getAuthor = (id) => {
    return Author.findById(id);
}

//@TODO fields ['authorName'] ... 
export const createAuthor = async (newAuthor) => {
    const t = await sequelize.transaction();
    try{
        const author = await Author.create(newAuthor, {transaction: t})
        await t.commit();
        return Promise.resolve(author);
    }catch(err){
        await t.rollback();
        console.error('[ERROR REPOSITOY AUTHOR CREATE]: ', err);        
        return Promise.reject(err);
    }
}

export const updateAuthor = async  (author, data) => {
    await author.update(data);
    await author.save();
    return author;
}


