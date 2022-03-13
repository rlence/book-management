import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({
    path:`.env.${process.env.NODE_ENV}`
});

const app = express();

app.use(cors);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.listen(process.env.PORT, () => {
    console.log("Server listen in PORT " + process.env.PORT);
});