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

export const creatBook = (newBook) => {
    return Book.create(newBook)
}

export const updateBook = async  (book, data) => {
    await book.update(data);
    await book.save();
    return book;
}

export const deletedBook =  async (id) => {
    return await Book.destroy({
        where:{
            id: id
        }
    })
}
