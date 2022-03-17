import authorRouter from "./author/network";
import editorialRouter from "./editorial/network";
import bookRouter from "./book/network";

const url = '/api';

const router = (app) => {
    app.use(`${url}/author`, authorRouter);
    app.use(`${url}/editorial`, editorialRouter); 
    app.use(`${url}/book`, bookRouter);      
}

export default router;