import { Book, BookAuthor, Author, Editorial } from "../../model/index";

export const getBook = (id) => {
    return Book.findByPk(id, {
        include: [
            { model: Editorial, required: true },
            { model: BookAuthor, include: [
                { model: Author, require: true}
            ]}
         ],
    });
}

export const getBooks = () => {
    return Book.findAll({
        include: [
            { model: Editorial },
            { model: BookAuthor, include: [
                { model: Author }
            ]}
         ],
    });
}

export const creatBook = (newBook, t) => {
    return Book.create(newBook, { transaction: t })
}

export const updateBook = async  (book, data) => {
    await book.update(data);
    await book.save();
    return book;
}

export const deletedBook =  async (id, t) => {
    return await Book.destroy({
        where:{
            id: id
        }
    }, { transaction: t })
}
