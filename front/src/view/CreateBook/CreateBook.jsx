import React from "react";
import "./CreateBook.scss";
import { useParams } from "react-router-dom";

import Card from "../../components/Card/Card";
import FormBook from "../../components/FormBook/FormBook";

const CreateBook = () => {

    return( 
        <div className="contet-form">
            <Card>
                <FormBook></FormBook>
            </Card>
        </div>
    )

}

export default CreateBook;