import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "../routes/Routes";

export const DevHeader = () => {
    return (
        <div>
            <NavLink to={PATH.LOGIN} style={{padding:'10px'}}>login </NavLink>
            <NavLink to={PATH.REGISTER}  style={{padding:'10px'}}>register</NavLink>
            <NavLink to={PATH.PROFILE}  style={{padding:'10px'}}>profile</NavLink>

        </div>
    );
}