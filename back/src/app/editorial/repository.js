import { Editorial } from "../../model/index";

export const getEditorial = (id) => {
    return Editorial.findById(id);
}