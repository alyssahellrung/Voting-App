/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import LoginBtn from "../LoginBtn";

function AccountDropdown(props) {

    return (
        <div uk-dropdown="mode: click">
            <ul className="uk-nav uk-dropdown-nav">
                <li><Link className="drop-item" to="/dashboard">Dashboard</Link></li>
                <li><Link className="drop-item" to="/signup">Signup</Link></li>
                <LoginBtn classes="drop-item dropdown-login" />
                <li><Link className="drop-item" to="/logout">Logout</Link></li>
            </ul>
        </div>
    )
};

export default AccountDropdown;