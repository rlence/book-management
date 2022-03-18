import React, {useEffect, useState} from "react";


import Content from "../../components/Content/Content";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

import { initialStateAlert } from "../../shared/state";

import { getAllAuthor, deleteAuhor } from "../../service/author";

const Author = () => {

    const [authors, setAuthors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [alert, setAlert] = useState(initialStateAlert);
    const [loadingDelete, setLoadingDelete] = useState(false)

    const handelAuthorDelete = async (id) => {
        console.log(id)
        setLoadingDelete(true);
        try{
            const { body } = await deleteAuhor(id);
            const updateAuthors= authors.filter(book => book.id !== id);
            setAuthors(updateAuthors);
            setAlert({status: true, message:body.message , type:"succes"});
          
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
        title: "Name",
        type: "name",
    },{
        title: "Last Name",
        type: "lastname",
    },{
        title: "",
        type: "",
        extra: (id) => (
            <>
                <button className="separation transparent" onClick={() => handelAuthorDelete(id)}>
                    <FontAwesomeIcon  icon={faPen} />
                </button>
                
                <button className="separation transparent" disabled={loadingDelete } onClick={() => handelAuthorDelete(id)}>
                    <FontAwesomeIcon  icon={faTrash} />
                </button>
                
            </>
        )
    }
    ];

    useEffect(() => {
        getAllAuthor()
            .then(data => setAuthors(data))
            .catch( () => setAlert({status: true, message: "An error has occurred, try again later"}))
            .finally(() => setLoading(false));
    },[]);

    return(
        <Content alert={alert} loading={loading} columns={columns} dataSource={authors} text={"Authors"} />
    )

}

export default Author;