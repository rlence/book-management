import React, { useEffect, useState } from "react";
import "./Book.scss";

import Table from "../../components/Table/Table";
import Card from "../../components/Card/Card";
import Spinner from "../../components/Spinner/Spinner";
import Alert from "../../components/Alert/Alert";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

import { getBooks, deletedBook } from "../../service/book";

const initialStateAlert = {
    status: false,
    message: "",
    type: ""
}

const Book = () => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [alert, setAlert] = useState(initialStateAlert);
    const [loadingDelete, setLoadingDelete] = useState(false)

    const handelBookDelete = async (id) => {
        setLoadingDelete(true);
        try{
            const data = await deletedBook(id);
            const updateBook = books.filter(book => book.id !== id);
            setBooks(updateBook);
            setAlert({status: true, message: data.body.message, type:"succes"});
          
        }catch(err){
            setAlert({status: true, message: err, type:"error"});
        }finally{
            setLoadingDelete(false);
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
                <button className="separation transparent" onClick={() => handelBookDelete(id)}>
                    <FontAwesomeIcon  icon={faPen} />
                </button>
                
                <button className="separation transparent" disabled={loadingDelete } onClick={() => handelBookDelete(id)}>
                    <FontAwesomeIcon  icon={faTrash} />
                </button>
                
            </>
        )
    }
    ];

    useEffect(() => {
        getBooks()
            .then(data => setBooks(data))
            .catch( () => setAlert({status: true, message: "An error has occurred, try again later"}))
            .finally(() => setLoading(false));
    },[]);

    return(
        <div className="book-content">
            { alert.status ? <Alert text={alert.message} type={alert.type} />: null }
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