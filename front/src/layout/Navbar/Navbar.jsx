import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="nav-bar column">
            <div className="logo">
                logo
            </div>
            <div className="nav-menu column">
                <NavLink className="link" exact={"true"} to="/">
                    <span>Home</span>
                </NavLink>
                <NavLink className="link" exact={"true"} to="/book">
                    <span>Book</span>
                </NavLink>
                <NavLink className="link" exact={"true"} to="/author">
                    <span>Author</span>
                </NavLink>
                <NavLink className="link" exact={"true"} to="/editorial">
                    <span>Editorial</span>
                </NavLink>
            </div>
            
        </div>
    )
}

export default Navbar;