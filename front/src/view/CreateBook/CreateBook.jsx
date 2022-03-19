import React, { useState } from "react";
import "./CreateBook.scss";
import { useParams, useNavigate } from "react-router-dom";

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
            setErr("Se produjo un error")
        }
    }

    return( 
        <div className="contet-form">
            {err !== "" ? <Alert  text={err} type="error" /> : null }
            <Card>
                <FormBook book={book} setBook={setBook} submit={createBook} ></FormBook>
            </Card>
        </div>
    )

}

export default CreateBook;