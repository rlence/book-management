import { BookAuthor } from "../model/index";

const seedBookAuthor = () => {
    return BookAuthor.bulkCreate([
        {
            authorId: 2,
            bookId: 1,
        },
        {
            authorId: 3,
            bookId: 1,
        },
        {
            authorId: 4,
            bookId: 2,
        },
        {
            authorId: 1,
            bookId: 3,
        },
    ])
}

export default seedBookAuthor;