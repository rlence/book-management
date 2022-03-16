import { Editorial } from "../../model/index";

export const getEditorial = (id) => {
    return Editorial.findById(id);
}

export const listEditorial = () => {
    return Editorial.findAll();
}

export const createEditorial = (newEditorial) => {
    return Editorial.create(newEditorial);
}

export const updateEditorial = (editorial, data) => {
    await editorial.update(data);
    await editorial.save();
    return editorial;
}