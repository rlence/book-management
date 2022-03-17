import React from "react";
import "./Layout.scss";

const Layout = (props) => {

    return (
        <div className="row layout">
            <div className="col-2 nav-bar">
                nav
            </div>
            <div className="col-10 content">
                {props.children}
            </div>
        </div>
    );
}

export default Layout;