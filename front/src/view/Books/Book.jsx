import React, { useEffect, useState } from "react";
import "./Book.scss";

import Table from "../../components/Table/Table";
import Card from "../../components/Card/Card";
import Spinner from "../../components/Spinner/Spinner";
import Alert from "../../components/Alert/Alert";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

import { getBooks, deletedBook } from "../../service/book";

const initialStateError = {
    status: false,
    message: ""
}

const Book = () => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(initialStateError);

    const handelBookDelete = async (id) => {
        try{
            const data = await deletedBook(1);
            console.log(data)
          
        }catch(err){
            console.log(err, "en el error")
            setError({status: true, message: err});
        }
      
    }

    const columns = [{
        title: "id",
        type: "id"
    },{
        title: "Title",
        type: "title",
    },{
        title: "Genre",
        type: "genre",
    },{
        title: "Publication Date",
        type:"publicationDate",
    },{
        title: "Editorial",
        type:"editorial",
    },{
        title: "Authors",
        type:"authors",
        extra:["name", "lastname"]
    },{
        title: "Status",
        type:"status",
    },{
        title: "",
        type: "",
        extra: (id) => (
            <>
                <span className="separation">
                    <FontAwesomeIcon onClick={() => handelBookDelete(id)} icon={faPen} />
                </span>
                <span className="separation">
                    <FontAwesomeIcon onClick={() => handelBookDelete(id)} icon={faTrash} />
                </span>
            </>
        )
    }
    ];

    useEffect(() => {
        getBooks()
            .then(data => setBooks(data))
            .catch( () => setError({status: true, message: "An error has occurred, try again later"}))
            .finally(() => setLoading(false));
    },[]);
    console.log(error)
    return(
        <div className="book-content">
            { error.status ? <Alert text={error.message} type="error"/>: null }
            <div>
                <h1>Books</h1>
            </div>
            { !loading ? <div>
                <Card>
                    <Table columns={columns} dataSource={books}  />
                </Card>
                
            </div> :
            <Card>
                <Spinner />
            </Card>
            }
            <div>
                <button className="btn btn-primary">+ Book</button>
            </div>
        </div>
    )

}

export default Book;