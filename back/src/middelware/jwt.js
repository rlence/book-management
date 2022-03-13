import jwt from "jsonwebtoken";

export function generateToken(user){
    const token = jwt.sign({user}, process.env.KEY_TOKEN);
    return token;
}
 
export function decodeToken(token){
    return jwt.verify(token, process.env.KEY_TOKEN); 
}