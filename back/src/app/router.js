import authorRouter from "./author/network";

const url = '/api';

const router = (app) => {
    console.log('en router');
    app.use(`${url}/author`, authorRouter);  
}

export default router;