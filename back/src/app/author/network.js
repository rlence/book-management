import express from 'express';
import * as AuthorController from "./controller";
import { success, error } from "../../shared/response";

const router = express.Router();

router.get('/', (req, res) => {
    AuthorController.getAuthors()
        .then( data => success(res, data))
        .catch( err => error(res, err ));
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    AuthorController.getAuthor(id)
        .then( data => success(res, data))
        .catch( err => error(res, err));
});

router.post('/', (req, res) => {
    const body = req.body;
    AuthorController.createAuthor(body)
        .then( data => success(res, data))
        .catch( err => error(res, err.status, err.message));
});


export default router;