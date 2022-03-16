import { Author } from "../../model/index";

export const getAuthors = () => {
    return Author.findAll();
}

export const getAuthor = (id) => {
    return Author.findByPk(id);
}

//@TODO fields ['authorName'] ... 
export const createAuthor = async (newAuthor) => {
    return Author.create(newAuthor)
}

export const updateAuthor = async  (author, data) => {
    await author.update(data);
    await author.save();
    return author;
}


