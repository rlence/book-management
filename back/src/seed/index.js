import seedEditorial from "./editorial";
import seedAuthor from "./author";
import seedBook from "./book";
import seedBookAuthor from "./bookAuthor";

const seed = () => {
    Promise.all([seedEditorial(), seedAuthor(), seedBook(), seedBookAuthor()])
        .then(() => console.log("SEED SUBIDO"))
        .catch(err => console.log("ERROR AL SUBIR SEED", err))
}

export default seed;