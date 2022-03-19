import seedEditorial from "./editorial";
import seedAuthor from "./author";
import seedBook from "./book";
import seedBookAuthor from "./bookAuthor";

const seed = async () => {
    try{
        await seedEditorial();
        await seedAuthor();
        await seedBook();
        await seedBookAuthor();
        console.log("Seed successfully inserted")
    }catch(err){
        console.log("[ERROR TO INSERT SEED]:", err)
    }
}

export default seed;