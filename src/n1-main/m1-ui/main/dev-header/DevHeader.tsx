import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "../routes/Routes";

export const DevHeader = () => {
    return (
        <div>
            <NavLink to={PATH.LOGIN}>login </NavLink>
            <NavLink to={PATH.REGISTER}>register</NavLink>

        </div>
    );
}