import React, { useEffect, useState } from "react";
import "../../App.scss";

import { useParams, useNavigate } from "react-router-dom";

import Card from "../../components/Card/Card";
import FormBook from "../../components/FormBook/FormBook";
import Alert from "../../components/Alert/Alert";

import { getBook, updateBook } from "../../service/book";

const initialState = {
    title: "",
    genre: "",
    publicationDate:"",
    editorialId: 0,
    authorsId:[]
}


const EditBook = () => {

    const [book, setBook] = useState(initialState);
    const navigate = useNavigate();
    const [err, setErr] = useState("");

    const { id } = useParams();

    useEffect(() => {
        getBook(id)
            .then(data => setBook(data))
            .catch(err => console.log(err))
    }, [])

    const putBook = async () => {
        console.log(book)
        try{
           await updateBook(book,id)
           navigate("/book");
        }catch(err){
            setErr("an error occurred while updating the book")
        }
    }



    return (
        <div className="contet-form">
            {err !== "" ? <Alert  text={err} type="error" /> : null }
            <Card>
                <h2 className="title">Edit Book</h2>
                <FormBook book={book} setBook={setBook} submit={putBook} ></FormBook>
            </Card>
        </div>
    )

}
export default EditBook;