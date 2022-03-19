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
            publicationDate: moment(book.publicationDate).format("YYYY/MM/DD"),
            status: book.status,
            title: book.title,
            is_active: book.is_active,
            editorial: book.Editorial,
            authors: book.BookAutors.length === 0 ? null : book.BookAutors.map( author => ({
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

export const getBook = async (id) => {
    try{
        const res = await fetch(`${BOOK_URL}/${id}`);
        const { body } = await res.json();
        const book = {
            id: body.id,
            genre: body.genre,
            publicationDate: moment(body.publicationDate).format("YYYY/MM/DD"),
            status: body.status,
            title: body.title,
            is_active: body.is_active,
            editorialId: body.EditorialId,
            authorsId: body.BookAutors.length === 0 ? null : body.BookAutors.map( author => ( author.AuthorId))
        }
        return Promise.resolve(book);

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

export const postBook = async (book) => {
    try{
        const res = await fetch(`${BOOK_URL}`, {
            method:"POST",
            body: JSON.stringify(book),
            headers:{
                "Content-Type":"application/json"
            }
        });

        const data = await res.json();
        if(res.status >= 400){
            return Promise.reject(data.message)
        }
        return Promise.resolve(data);
    }catch(err){
        console.log(err);
        Promise.reject(err);
    }
}

export const updateBook = async (book, id) => {
    try{
        const res = await fetch(`${BOOK_URL}/${id}`, {
            method:"PUT",
            body: JSON.stringify(book),
            headers:{
                "Content-Type":"application/json"
            }
        });

        const data = await res.json();
        if(res.status >= 400){
            return Promise.reject(data.message)
        }
        return Promise.resolve(data)
    }catch(err){
        console.log(err);
        Promise.reject(err);
    }
}
