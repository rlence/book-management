import { BASE_URL } from "./index";

const PREFIX = "/author";
const AUTHOR_URL = `${BASE_URL}${PREFIX}`;

export const getAllAuthor = async () => {
    try{
        const res = await fetch(AUTHOR_URL);
        const data = await res.json();
        return Promise.resolve(data.body);

    }catch(err){
        console.log(err);
        return Promise.reject(err);
    }
}

export const deleteAuhor = async (id) => {
    try{
        const res = await fetch(`${AUTHOR_URL}/${id}`, {
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

export const createAuthor = async (author) => {
    try{
        const res = await fetch(`${AUTHOR_URL}`, {
            method:"POST",
            body: JSON.stringify(author),
            headers:{
                "Content-Type":"application/json"
            }
        });

        const data = await res.json();
        return Promise.resolve(data)
    }catch(err){
        console.log(err);
        Promise.reject(err);
    }
}

export const putAuthor = async (author, id) => {
    try{
        const res = await fetch(`${AUTHOR_URL}/${id}`, {
            method:"PUT",
            body: JSON.stringify(author),
            headers:{
                "Content-Type":"application/json"
            }
        });

        const data = await res.json();
        return Promise.resolve(data)
    }catch(err){
        console.log(err);
        Promise.reject(err);
    }
}

export const geOneAuthor =  async (id) => {
    try{
        const res = await fetch(`${AUTHOR_URL}/${id}`);
        const data = await res.json();
        return Promise.resolve(data.body);

    }catch(err){
        console.log(err);
        return Promise.reject(err);
    }
}