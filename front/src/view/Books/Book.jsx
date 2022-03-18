import React, { useEffect, useState } from "react";
import "../../App.scss";
import Content from "../../components/Content/Content";
import { getBooks, deletedBook } from "../../service/book";
import { pencil, trash } from "../../icons/icons";

import { initialStateAlert } from "../../shared/state";

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
        extra: ["editorialName"]
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
                    {pencil}
                </button>
                
                <button className="separation transparent" disabled={loadingDelete } onClick={() => handelBookDelete(id)}>
                    {trash}
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
        <Content alert={alert} loading={loading} columns={columns} dataSource={books} text={"Books"} />
    )

}

export default Book;