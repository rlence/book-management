import React, {useEffect, useState} from "react";
import "../../App.scss";

import Content from "../../components/Content/Content";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

import { initialStateAlert } from "../../shared/state";

import { getBooks, deletedBook } from "../../service/book";

const Editorial = () => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [alert, setAlert] = useState(initialStateAlert);
    const [loadingDelete, setLoadingDelete] = useState(false)

    const handelEditoralDelete = async (id) => {
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
                <button className="separation transparent" onClick={() => handelEditoralDelete(id)}>
                    <FontAwesomeIcon  icon={faPen} />
                </button>
                
                <button className="separation transparent" disabled={loadingDelete } onClick={() => handelEditoralDelete(id)}>
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
        <Content alert={alert} loading={loading} columns={columns} dataSource={books} text={"Editorial"} />
    )

}

export default Editorial;