import React from "react";
import "./Alert.scss";

const Alert = ({type, text}) => {

    return (
        <div className={"alert aler-content " + type} role="alert">
            {text}
        </div>
    )

}

export default Alert;