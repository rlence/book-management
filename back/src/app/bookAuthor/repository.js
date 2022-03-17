import { Book, BookAuthor, Author, Editorial } from "../../model/index";

export const createRelationBookAuthor =  (newBookAuthor, t) => {
    return BookAuthor.bulkCreate(newBookAuthor, { transaction: t });
}

export const deleteAuthorOfTheBook = (bookId, authorId) => {
    return BookAuthor.destroy({
        where:{
            authorId,
            bookId,
        }
    });
}

export const deleteAuthorOfTheBooks = (authorId, t) => {
    return BookAuthor.destroy({
        where:{
            authorId
        }
    }, { transaction: t })
}


