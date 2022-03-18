import { Book, BookAuthor, Author, Editorial } from "../../model/index";

export const createRelationBookAuthor =  (newBookAuthor) => {
    return BookAuthor.bulkCreate(newBookAuthor);
}

export const deleteAuthorOfTheBook = (bookId, authorId) => {
    return BookAuthor.destroy({
        where:{
            authorId,
            bookId,
        }
    });
}

export const deleteAuthorOfTheBooks = (authorId) => {
    return BookAuthor.destroy({
        where:{
            authorId
        }
    })
}

export const deleteBook = (bookId) => {
    return BookAuthor.destroy({
        where:{
            bookId
        }
    });
}


