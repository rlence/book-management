import React from "react";
import Navbar from "./Navbar/Navbar";
import "./Layout.scss";

const Layout = (props) => {

    return (
        <div className="layout">
            <div className="col-2 aside-menu">
                <Navbar />
            </div>
            <div className="col-10 content">
                {props.children}
            </div>
        </div>
    );
}

export default Layout;