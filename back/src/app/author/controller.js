import * as AuhtorRepository from "./repository";
import * as BookAuthorRepository from "../bookAuthor/repository";
import { errorObject } from "../../shared/response";

export const getAuthors =  async () => {
    try{
        return AuhtorRepository.getAuthors();
    }catch(err){
        console.log('[ERROR GET AUTHORS]: ', err);
        return errorObject(500);
    }
}

export const getAuthor = async (id) => {
    try{
        const author = await AuhtorRepository.getAuthor(id);
        if(!author){
            return "author not found"
        }
        return author;
    }catch(err){
        console.log('[ERROR GET AUTHOR]: ', err);
        return errorObject(500);
    }
}

export const createAuthor =  async (body) => {
    try{
        const { name, lastname } = body;

        if(!name || !lastname){
            return errorObject(400);
        }

        return await AuhtorRepository.createAuthor({name, lastname});

    }catch(err){
        console.log('[ERROR CREATE AUTHOR]: ', err);
        return errorObject(500);
    }
}

export const updateAuthor = async (id, body) => {
    try{

        const {  name, lastname } = body;

        if(!name || !lastname){
            return errorObject(400);
        }
        
        const author =  await AuhtorRepository.getAuthor(id);
        if(!author){
            return "author not found"
        }
        const authorUpdate = await AuhtorRepository.updateAuthor(author, {name, lastname});
        return authorUpdate;

    }catch(err){
        console.log('[ERROR UPDATE AUTHOR]: ', err);
        return errorObject(500);
    }
}

export const deletedAuthor = async (authorId) => {
    try{   
        await BookAuthorRepository.deleteAuthorOfTheBooks(authorId);
        const authorDeleted = await AuhtorRepository.deleteAuthor(authorId);
        if(!authorDeleted){
            return errorObject(404, "The author not exist");
        }
       
        return {
            id: authorId,
            message: "Author is deleted"
        }
        
    }catch(err){
        console.log('[ERROR DELETE AUTHOR]: ', err);
        return errorObject(500);
    }
}