import jwt from "jsonwebtoken";
import Enviroment from "../config/config";

const { KEY_TOKEN } = Enviroment;

export function generateToken(user){
    const token = jwt.sign({user}, KEY_TOKEN);
    return token;
}
 
export function decodeToken(token){
    return jwt.verify(token, KEY_TOKEN); 
}