import express from 'express';
import * as BookController from "./controller";
import { success, error } from "../../shared/response";

const router = express.Router();

router.get('/', (req,res) => {
    BookController.getAllBook()
        .then( data => success(res, data))
        .catch( err => error(res, err.message, err.status));
});

router.get('/:id', (req,res) => {
    const bookId = req.params.id;
    BookController.getBook(bookId)
        .then( data => success(res, data))
        .catch( err => error(res, err.message, err.status));
});

router.post('/', (req, res) => {
    const body = req.body;
    BookController.createBook(body)
        .then( data => success(res, data, 201))
        .catch( err => error(res, err.message, err.status));
});

router.put('/:id', (req, res) => {
    const body = req.body;
    const bookId = req.params.id;
    BookController.updateBook(body, bookId)
        .then( data => success(res, data))
        .catch( err => error(res, err.message, err.status));
});

export default router;