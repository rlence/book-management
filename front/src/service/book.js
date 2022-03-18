import { BASE_URL } from "./index";
const PREFIX = "/book";

const BOOK_URL = `${BASE_URL}${PREFIX}`;

export const getBooks = () => {
    return fetch(BOOK_URL);
}

export const deletedBook = (id) => {
    return fetch(`${BOOK_URL}/${id}`, {
        method:"DELETE"
    })
}