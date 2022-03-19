import React, {useState} from "react";

import Spinner from "../Spinner/Spinner";
import Alert from "../Alert/Alert";

const FormEditorial = ({editorial, setEditorial, submit}) => {

    const [loading, setLoading] = useState(false);
    const [errors, setErros] = useState("");

    const handelChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setEditorial({...editorial, [name]: value});
    }

    const handelSubmit = async (e) => {
        try{
            e.preventDefault();
            if(editorial.editorialName !== ""){
                setLoading(true);
                return await submit();
            }
            setErros("all fields are required");
            
        }finally{
            setLoading(false);
        }
    }

    return(
        <form className="form-book" onChange={handelChange} onSubmit={handelSubmit}>
            <div className="input-group input-group-sm mb-3">
                <input type="text" defaultValue={editorial.editorialName} className="form-control" placeholder="editorial name" name="editorialName" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>

           {!loading ?  <button className="btn save-btn"> Save </button> : <Spinner />}
            
            {errors === "" ? null : <Alert text={errors} type="error" /> }

        </form>
    )

}

export default FormEditorial;