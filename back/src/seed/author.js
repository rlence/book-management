import { Author } from "../model/index";

const seedAuthor = () => {
    return Author.bulkCreate([
        {
            name: "Gorge R.",
            lastname:"Martin"
        },
        {
            name: "Miguel de",
            lastname:"Cervantes"
        },
        {
            name: "Willian",
            lastname:"Shakespeare"
        },
        {
            name: "Eric",
            lastname:"Ries"
        },
    ])
}

export default seedAuthor;