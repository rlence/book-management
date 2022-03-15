import * as AuhtorRepository from "./repository";
import { objRes } from "../../shared/response";

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
        return Promise.reject(500);
    }
}

export const createAuthor =  async (body) => {
    try{
        const { authorName } = body;

        if(!authorName){
            return Promise.reject(400);
        }

        const author =  await AuhtorRepository.createAuthor(body);
        return Promise.resolve(author);

    }catch(err){
        console.log('[ERROR CREATE AUTHOR]: ', err);
        if(err.errors[0]?.message == "author_name must be unique"){
            objRes.message = "the author already exists",
            objRes.status = 409
            return Promise.reject(objRes)
        }
        return Promise.reject(500);
    }
}