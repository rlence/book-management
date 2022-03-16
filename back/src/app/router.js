import authorRouter from "./author/network";
import editorialRouter from "./editorial/network";

const url = '/api';

const router = (app) => {
    app.use(`${url}/author`, authorRouter);
    app.use(`${url}/editorial`, editorialRouter);    
}

export default router;