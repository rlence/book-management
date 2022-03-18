import { Book } from "../model/index";

const seedBook= () => {
    return Book.bulkCreate([
        {
            title: "El terror del bug",
            genre:"Terror",
            publicationDate:"2020-01-10",
            editorialId:1,
            status:"available"
        },
        {
            title: "Lean Startup",
            genre:"Emprendimeinto",
            publicationDate:"2013-04-01",
            editorialId:2,
            status:"available"
        },
        {
            title: "Pragmatic Programmer",
            genre:"Informatica",
            publicationDate:"2019-11-25",
            editorialId:3,
            status:"available"
        },
    ])
}

export default seedBook;