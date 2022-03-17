import express from 'express';
import * as EditorialController from "./controller";
import { success, error } from "../../shared/response";

const router = express.Router();

router.get('/', (req, res) => {
    EditorialController.getAllEditorial()
        .then( data => success(res, data))
        .catch( err => error(res, err.message, err.status));
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    EditorialController.getEditorial(id)
        .then( data => success(res, data))
        .catch( err => error(res, err.message, err.status));
});

router.post('/', (req, res) => {
    const body = req.body;
    EditorialController.createEditorial(body)
        .then( data => success(res,data))
        .catch( err => error(res, err.message, err.status));
});

router.put('/:id', (req, res) => {
    const body = req.body;
    const id = req.params.id;
    EditorialController.updateEditorial(body, id)
        .then( data => success(res, data))
        .catch( err => error(res, err.message, err.status));
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    EditorialController.deletedEditorial(id)
        .then( data => success(res, data))
        .catch( err => error(res, err.message, err.status));
});

export default router;