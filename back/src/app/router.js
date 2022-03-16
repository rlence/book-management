import authorRouter from "./author/network";

const url = '/api';

const router = (app) => {
    app.use(`${url}/author`, authorRouter);  
}

export default router;