import { Author } from "../../model/index";
import { Op } from "sequelize";

export const getAuthors = () => {
    return Author.findAll();
}

export const getAuthor = (id) => {
    return Author.findByPk(id);
}

export const createAuthor = async (newAuthor) => {
    return Author.create(newAuthor)
}

export const updateAuthor = async  (author, data) => {
    await author.update(data);
    await author.save();
    return author;
}

export const getAuthorsByIds = (listIds) => {
    return Author.findAll({ where: {
        id: {
            [Op.in]:listIds
        },
        is_active: true
    } });
}

export const deleteAuthor = (authorId) => {
    return Author.destroy({
        where:{
            id: authorId
        }
    })
}


