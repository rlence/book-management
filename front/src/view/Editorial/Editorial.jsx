import React, {useEffect, useState} from "react";
import "../../App.scss";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content/Content";
import { pencil, trash } from "../../icons/icons";
import { initialStateAlert } from "../../shared/state";

import { getAllEditorial, deleteEditorial } from "../../service/editorial";

const Editorial = () => {
    const navigate = useNavigate();

    const [editorial, setEditorial] = useState([]);
    const [loading, setLoading] = useState(true);
    const [alert, setAlert] = useState(initialStateAlert);
    const [loadingDelete, setLoadingDelete] = useState(false)

    const handelEditoralDelete = async (id) => {
        console.log(id)
        setLoadingDelete(true);
        try{
            const { body } = await deleteEditorial(id);
            const updateEditorial= editorial.filter(book => book.id !== id);
            setEditorial(updateEditorial);
            setAlert({status: true, message: body.message, type:"succes"});
          
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
        title: "Editorial Name",
        type: "editorialName",
    },{
        title: "",
        type: "",
        extra: (id) => (
            <>
                <button className="separation transparent" onClick={() => navigate(`/edit/editorial/${id}`)}>
                    {pencil}
                </button>
                
                <button className="separation transparent" disabled={loadingDelete } onClick={() => handelEditoralDelete(id)}>
                    {trash}
                </button>
                
            </>
        )
    }
    ];

    useEffect(() => {
        getAllEditorial()
            .then(data => setEditorial(data))
            .catch( () => setAlert({status: true, message: "An error has occurred, try again later"}))
            .finally(() => setLoading(false));
    },[]);

    return(
        <Content alert={alert} loading={loading} columns={columns} dataSource={editorial} text={"Editorial"} />
    )

}

export default Editorial;