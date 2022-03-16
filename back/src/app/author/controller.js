import * as AuhtorRepository from "./repository";
import { errorObject } from "../../shared/response";

export const getAuthors =  async () => {
    try{
        return AuhtorRepository.getAuthors();
    }catch(err){
        console.log('[ERROR GET AUTHORS]: ', err);
        return Promise.reject(500);
    }
}

export const getAuthor = async (id) => {
    try{
        return AuhtorRepository.getAuthor(id);
    }catch(err){
        console.log('[ERROR GET AUTHOR]: ', err);
        return Promise.reject(errorObject(500));
    }
}

export const createAuthor =  async (body) => {
    try{
        const { authorName } = body;

        if(!authorName){
            return Promise.reject();
        }

        return await AuhtorRepository.createAuthor(body);

    }catch(err){
        console.log('[ERROR CREATE AUTHOR]: ', err);
        if(err.errors[0]?.message == "author_name must be unique"){
            return Promise.reject(errorObject(500, "the author already exists"));
        }
        return Promise.reject(errorObject(500));
    }
}