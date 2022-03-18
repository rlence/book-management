import React from "react";
import "./Spinner.scss";

const Spinner = ({ type }) => {
    return (
        <div className="spinner-content">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner;