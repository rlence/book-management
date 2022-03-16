import * as EditorialRepository from "./repository";
import { errorObject  } from "../../shared/response";

export const getEditorial = async (id) => {
    try{
        const editorial = await EditorialRepository.getEditorial(id);
        if(!editorial){
            return "editorial not found";
        }
        return editorial;
    }catch(err){
        console.log("[ERROR GET EDITORIAL]:", err);
        return errorObject(500);
    }
}

export const getAllEditorial = async () => {
 try {
    return await EditorialRepository.getAllEditorial();
 }catch(err){
    console.log("[ERROR GET ALL EDITORIAL]:", err);
    return errorObject(500);
 }
}

export const createEditorial = async (body) => {
    try{

        const { editorialName } = body;
        if(!editorialName){
            return errorObject(400);
        }
        return await EditorialRepository.createEditorial({editorialName});

    }catch(err){
        console.log("[ERROR CREATE EDITORIAL]:", err);
        if(err.errors[0]?.message == "editorial_name must be unique"){
            return errorObject(409, "the editorial already exists");
        }
        return errorObject(500);
    }
}

export const updateEditorial = async (body, editorialId) => {
    try{
        const { editorialName } = body;
        if(!editorialName){
            return errorObject(400);
        }

        const editorial = await EditorialRepository.getEditorial(editorialId);
        if(!editorial){
            return "editorial not found";
        }

        return await EditorialRepository.updateEditorial(editorial, {editorialName});

    }catch(err){
        if(err.errors[0]?.message == "editorial_name must be unique"){
            return errorObject(409, "the editorial already exists");
        }
        return errorObject(500);
    }
}

export const deletedEditorial = async (editorialId) => {
    try{
        

    }catch(err){
        return errorObject(500);
    }
}