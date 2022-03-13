import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan'

import Enviroment from "./config/config.js";
import sequelize from './config/sequelize.js';

import router from "./app/router.js";

const { PORT } = Enviroment;
const app = express();

//Middleware
app.use(cors);
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Router
router(app);

app.listen(PORT, () => {
    console.log("Server listen in PORT " + PORT);

    sequelize.authenticate()
        .then( () => console.log("Connection to DB"))
        .catch( err => console.error('[ERROR CONNECT DB]: ', err))
});