import { BASE_URL } from "./index";
import moment from "moment";

const PREFIX = "/book";
const BOOK_URL = `${BASE_URL}${PREFIX}`;

export const getBooks = async () => {
    try{
        const res = await fetch(BOOK_URL);
        const data = await res.json();
        const listBook = data.body.map(book => ({
            id: book.id,
            genre: book.genre,
            publicationDate: moment(book.publicationDate).format("DD-MM-YYYY"),
            status: book.status,
            title: book.title,
            is_active: book.is_active,
            editorial: book.Editorial,
            authors: book.BookAutors.map( author => ({
                id: author.Author.id,
                name: author.Author.name,
                lastname: author.Author.lastname,
            }))
        }));
        return Promise.resolve(listBook);

    }catch(err){
        console.log(err);
        return Promise.reject(err);
    }
    
}

export const deletedBook =  async (id) => {
    try{
        const res = await fetch(`${BOOK_URL}/${id}`, {
            method:"DELETE"
        });
        const data = await res.json();

        if(res.status >= 400){
            return Promise.reject(data.message)
        }

        return Promise.resolve(data);
    }catch(err){
        console.log(err);
        return Promise.reject(err);
    }
}