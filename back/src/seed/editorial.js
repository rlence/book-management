import { Editorial } from "../model/index";

const seedEditorial = () => {
    return Editorial.bulkCreate([
        {
            editorialName: "Alianza Editorial"
        },
        {
            editorialName: "Fandogamia Editorial"
        },
        {
            editorialName: "Planeta Cómic"
        },
    ])
}

export default seedEditorial;