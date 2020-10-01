import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "../routes/Routes";

export const DevHeader = () => {
    return (
        <div>
            <NavLink to={PATH.LOGIN} style={{padding: '10px'}}>login </NavLink>
            <NavLink to={PATH.REGISTER} style={{padding: '10px'}}>register</NavLink>
            <NavLink to={PATH.RESTORE} style={{padding: '10px'}}>restore</NavLink>
            <NavLink to={PATH.SET_PASS} style={{padding: '10px'}}>set new pass</NavLink>
            <NavLink to={PATH.PROFILE} style={{padding: '10px'}}>profile</NavLink>
            <NavLink to={PATH.PACKS} style={{padding: '10px'}}>packs</NavLink>
            <NavLink to={PATH.CARDS} style={{padding: '10px'}}>cards</NavLink>
        </div>
    );
}