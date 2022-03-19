import * as BookRepository from './repository';
import * as EditorialRepository from "../editorial/repository";
import * as AuthorsRepository from "../author/repository";
import * as BookAutorRopository from "../bookAuthor/repository";
import moment from "moment";

import { errorObject } from "../../shared/response";

const STATUS = ["available", "disabled", "reserved"];

export const getBook = (id) => {
    try{
        return BookRepository.getBook(id);
    }catch(err){
        console.log("[ERROR GET BOOK]:", err);
        return errorObject(500);
    }
}

export const getAllBook = () => {
    try{
        return BookRepository.getBooks();
    }catch(err){
        console.log("[ERROR GET BOOKS]:", err);
        return errorObject(500);
    }
}

export const createBook = async (body) => {
    try{
        const {title, genre, publicationDate,  editorialId, authorsId } = body;

        if(!title || !genre || !publicationDate || !editorialId || !authorsId.length){
            return errorObject(400);
        }

        const date = moment(publicationDate).format("YYYY-MM-DD");
        if(date === "Invalid date"){
            return errorObject(400, "Date is not valid")
        }

        const editorial = await EditorialRepository.getEditorial(editorialId);

        if(!editorial){
            return errorObject(400, "the editorial selected is not exist");
        }

        const authors = await AuthorsRepository.getAuthorsByIds(authorsId);
        if(!authors.length){
            return errorObject(400, "the selected authors do not exist");
        }
        
        if(authors.length !== authorsId.length){
            return errorObject(400, "the selected authors do not exist");
        }
      
        const newBook = {
            title,
            genre,
            publicationDate:date,
            editorialId
        }
        const book = await BookRepository.creatBook(newBook);
        const newBookAuthot = authorsId.map(author => ({bookId: book.id, authorId: author}) );
        await BookAutorRopository.createRelationBookAuthor(newBookAuthot);
        return newBook;
        
    }catch(err){
        console.log("[ERROR CREATE BOOK]:", err);
        return errorObject(500);
    }
}

export const updateBook = async (body, bookId) => {
    try{

        const {title, genre, publicationDate,  editorialId, authorsId } = body;

        if(!title || !genre || !publicationDate || !editorialId || !authorsId.length){
            return errorObject(400);
        }

        const date = moment(publicationDate).format("YYYY-MM-DD");
        if(date === "Invalid date"){
            return errorObject(400, "Date is not valid")
        }

        const book = await BookRepository.getBook(bookId);
        if(!book){
            return errorObject(400, "the book not exist");
        }

        const editorial = await EditorialRepository.getEditorial(editorialId);
        if(!editorial){
            return errorObject(400, "the editorial selected is not exist");
        }

        const authors = await AuthorsRepository.getAuthorsByIds(authorsId);
        if(!authors.length){
            return errorObject(400, "the selected authors do not exist");
        }
        
        if(authors.length !== authorsId.length){
            return errorObject(400, "the selected authors do not exist");
        }

        const bookUpdate = await BookRepository.updateBook(book, {title, genre, publicationDate,  editorialId });
        await BookAutorRopository.deleteBook(bookId);
        const newBookAuthot = authorsId.map(author => ({bookId: book.id, authorId: author}) );
        await BookAutorRopository.createRelationBookAuthor(newBookAuthot);
        return bookUpdate;

    }catch(err){
        console.log("[ERROR UPDATE BOOK]:", err);
        return errorObject(500);
    }
    
}

export const  deleteBook = async (id) => {
    try{
        await BookAutorRopository.deleteBook(id);
        const deleteBook =  await BookRepository.deletedBook(id);
        if(!deleteBook){
            return errorObject(404, "Not book find to deleted")
        }
        return {
            id,
            message: "Book deleted"
        }

    }catch(err){
        console.error('[ERROR DELETED BOOK]:', err);
        return errorObject(500);
    }
}