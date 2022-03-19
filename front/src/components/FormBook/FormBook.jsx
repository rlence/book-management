import React from "react";
import "./FormBook.scss";

const FormBook = () => {

    return (
        <form className="form-book">

            <h2 className="title">Create Book</h2>

            <div className="input-group input-group-sm mb-3">
                <input type="text" className="form-control" placeholder="title" name="title" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>

            <div className="input-group input-group-sm mb-3">
                <input type="text" className="form-control" placeholder="genre" name="genre" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>

            <div className="input-group input-group-sm mb-3">
                <input type="text" className="form-control" placeholder="publication date" name="publicationDate" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>
            

        </form>
    )

}

export default FormBook;