import React, { useState } from "react";
import "./CreateBook.scss";
import { useParams } from "react-router-dom";

import Card from "../../components/Card/Card";
import FormBook from "../../components/FormBook/FormBook";

const initialState = {
    title: "",
    genre: "",
    publicationDate:"",
    editorialId: 0,
    authorsId:[]
}

const CreateBook = () => {

    const [book, setBook] = useState(initialState);
    
    console.log({book})
    return( 
        <div className="contet-form">
            <Card>
                <FormBook book={book} setBook={setBook} ></FormBook>
            </Card>
        </div>
    )

}

export default CreateBook;