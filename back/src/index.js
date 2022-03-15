import express from 'express';
import cors from 'cors';
import morgan from 'morgan'

import Enviroment from "./config/config.js";
import sequelize from './config/sequelize.js';

import { asyncModel } from "./model/sync";

import router from "./app/router.js";

const { PORT } = Enviroment;
const port = PORT || 4000;
const app = express();

//Middleware
app.use(cors());
app.use(morgan("combined"));
app.use(express.json());

//Router
router(app);

app.get('/', (req, res) => res.status(200).json('Hello World!'))

app.listen(port, async  () => {
    try{
        console.info("Server listen in PORT " + port);
        await sequelize.authenticate();
        console.info("Connection to DB");
        // create table if not exist
        asyncModel();

    }catch(err){
        console.error('[ERROR CONNECT DB]: ', err);
        process.exit(1);
    } 
});