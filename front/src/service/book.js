import { BASE_URL } from "./index";
const PREFIX = "/book";

const BOOK_URL = `${BASE_URL}${PREFIX}`;

export const getBooks = () => {
    console.log(BOOK_URL)
    return fetch(BOOK_URL);
}