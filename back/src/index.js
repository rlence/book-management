import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Enviroment from "./config/config.js";

import router from "./app/router.js";

const { PORT } = Enviroment;
const app = express();

//Middleware
app.use(cors);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Router
router(app);

app.listen(PORT, () => {
    console.log("Server listen in PORT " + PORT);
});