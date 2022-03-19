import { BASE_URL } from "./index";

const PREFIX = "/editorial";
const EDITORIAL_URL = `${BASE_URL}${PREFIX}`;

export const getAllEditorial = async () => {
    try{
        const res = await fetch(EDITORIAL_URL);
        const data = await res.json();
        return Promise.resolve(data.body);

    }catch(err){
        console.log(err);
        return Promise.reject(err);
    }
}

export const deleteEditorial = async (id) => {
    try{
        const res = await fetch(`${EDITORIAL_URL}/${id}`, {
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

export const postEditorial = async (editorial) => {
    try{
        const res = await fetch(`${EDITORIAL_URL}`, {
            method:"POST",
            body: JSON.stringify(editorial),
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

export const putEditorial = async (editorial, id) => {
    try{
        const res = await fetch(`${EDITORIAL_URL}/${id}`, {
            method:"PUT",
            body: JSON.stringify(editorial),
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

export const geOneEditorial =  async (id) => {
    try{
        const res = await fetch(`${EDITORIAL_URL}/${id}`);
        const data = await res.json();
        return Promise.resolve(data.body);

    }catch(err){
        console.log(err);
        return Promise.reject(err);
    }
}