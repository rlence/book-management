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
                <NavLink className="link" exact to="/" activeClassName="active">
                    <span>Home</span>
                </NavLink>
                <NavLink className="link" exact to="/book" activeClassName="active">
                    <span>Book</span>
                </NavLink>
                <NavLink className="link" to="/author" activeClassName="active">
                    <span>Author</span>
                </NavLink>
                <NavLink className="link" to="/editorial" activeClassName="active">
                    <span>Editorial</span>
                </NavLink>
            </div>
            
        </div>
    )
}

export default Navbar;