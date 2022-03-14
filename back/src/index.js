import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan'

import Enviroment from "./config/config.js";
import sequelize from './config/sequelize.js';

import { asyncModel } from "./model/sync";

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

app.listen(PORT, async  () => {
    try{
        console.info("Server listen in PORT " + PORT);
        await sequelize.authenticate();
        console.info("Connection to DB");
        // create table if not exist
        asyncModel();

    }catch(err){
        console.error('[ERROR CONNECT DB]: ', err);
        process.exit(1);
    } 
});