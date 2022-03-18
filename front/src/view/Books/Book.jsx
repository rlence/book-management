import React, { useEffect, useState } from "react";
import "./Book.scss";


import moment from "moment";

import Table from "../../components/Table/Table";
import Card from "../../components/Card/Card";
import Spinner from "../../components/Spinner/Spinner";

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

    const handelBookDelete = (id) => {
       console.log({id})
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
            .then(response => response.json())
            .then( data => {
                const listBook = data.body.map(book => ({
                    id: book.id,
                    genre: book.genre,
                    publicationDate: moment(book.publicationDate).format("DD-MM-YYYY"),
                    status: book.status,
                    title: book.title,
                    is_active: book.is_active,
                    editorial: book.Editorial,
                    authors: book.BookAutors.map( author => ({
                        id: author.Author.id,
                        name: author.Author.name,
                        lastname: author.Author.lastname,
                    }))
                }));
                setBooks(listBook);
            })
            .catch( err => {
                console.log(err, "err");
            })
            .finally(() => setLoading(false));
    },[]);

    

    console.log(error)
    return(
        <div className="book-content">
            <h1>Book</h1>
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