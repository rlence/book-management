import express from 'express';
import * as AuthorController from "./controller";
import { success, error } from "../../shared/response";

const router = express.Router();

router.get('/', (req, res) => {
    AuthorController.getAuthors()
        .then( data => success(res, data))
        .catch( err => error(res, err.message, err.status));
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    AuthorController.getAuthor(id)
        .then( data => success(res, data))
        .catch( err => error(res, err.message, err.status));
});

router.post('/', (req, res) => {
    const body = req.body;
    AuthorController.createAuthor(body)
        .then( data => success(res, data))
        .catch( err => error(res, err.message, err.status));
});

router.put('/:id', (req, res) => {
    const body = req.body;
    const id = req.params.id;
    AuthorController.updateAuthor(id,body)
        .then( data => success(res, data))
        .catch( err => error(res, err.message, err.status));
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    AuthorController.deletedAuthor(id)
        .then( data => success(res, data))
        .catch( err => error(res, err.message, err.status));
});


export default router;