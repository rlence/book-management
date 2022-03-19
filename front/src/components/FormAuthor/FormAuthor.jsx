import React, {useState} from "react";
import "./FormAuthor.scss";

import Spinner from "../Spinner/Spinner";
import Alert from "../Alert/Alert";

const FormAuthor = ({author, setAuthor, submit}) => {

    const [loading, setLoading] = useState(false);
    const [errors, setErros] = useState("");

    const handelChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAuthor({...author, [name]: value});
    }

    const handelSubmit = async (e) => {
        try{
            e.preventDefault();
            if(author.name !== "" && author.lastname !== "" ){
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
                <input type="text" defaultValue={author.name} className="form-control" placeholder="name" name="name" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>

            <div className="input-group input-group-sm mb-3">
                <input type="text" defaultValue={author.lastname} className="form-control" placeholder="lastname" name="lastname" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>

           {!loading ?  <button className="btn save-btn"> Save </button> : <Spinner />}
            
            {errors === "" ? null : <Alert text={errors} type="error" /> }

        </form>
    )

}

export default FormAuthor;