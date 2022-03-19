import React, { useState } from "react";
import "../../App.scss";
import { useNavigate } from "react-router-dom";

import Card from "../../components/Card/Card";
import FormBook from "../../components/FormBook/FormBook";
import Alert from "../../components/Alert/Alert";

import { postBook } from "../../service/book";

const initialState = {
    title: "",
    genre: "",
    publicationDate:"",
    editorialId: 0,
    authorsId:[]
}

const CreateBook = () => {

    const [book, setBook] = useState(initialState);
    const navigate = useNavigate();
    const [err, setErr] = useState("")

    const createBook = async () => {
        console.log({book})
        try{
           await postBook(book)
           navigate("/book");
        }catch(err){
            setErr("an error occurred while creating the book")
        }
    }

    return( 
        <div className="contet-form">
            {err !== "" ? <Alert  text={err} type="error" /> : null }
            <Card>
                <h2 className="title">Create Book</h2>
                <FormBook book={book} setBook={setBook} submit={createBook} ></FormBook>
            </Card>
        </div>
    )

}

export default CreateBook;