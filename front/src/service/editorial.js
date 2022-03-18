import { BASE_URL } from "./index";
import moment from "moment";

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

export const deleteEditorial = (id) => {
    console.log("aqio")
}