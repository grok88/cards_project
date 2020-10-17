import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "../routes/Routes";
import {Menu} from "antd";

export const DevHeader = () => {
    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} >
            <Menu.Item key='1'>
                <NavLink to={PATH.LOGIN} style={{padding: '10px'}}>login </NavLink>
            </Menu.Item>
            <Menu.Item key='2'>
                <NavLink to={PATH.REGISTER} style={{padding: '10px'}}>register</NavLink>
            </Menu.Item>
            <Menu.Item key='3'>
                <NavLink to={PATH.RESTORE} style={{padding: '10px'}}>restore</NavLink>
            </Menu.Item>
            <Menu.Item key='4'>
                <NavLink to={PATH.SET_PASS} style={{padding: '10px'}}>set new pass</NavLink>
            </Menu.Item>
            <Menu.Item key='5'>
                <NavLink to={PATH.PROFILE} style={{padding: '10px'}}>profile</NavLink>
            </Menu.Item>
            <Menu.Item key='6'>
                <NavLink to={PATH.PACKS} style={{padding: '10px'}}>packs</NavLink>
            </Menu.Item>
            {/*<Menu.Item key='7'>*/}
            {/*    <NavLink to={PATH.CARDS} style={{padding: '10px'}}>cards</NavLink>*/}
            {/*</Menu.Item>*/}
            {/*<Menu.Item key='8'>*/}
            {/*    <NavLink to={PATH.LEARN} style={{padding: '10px'}}>learn</NavLink>*/}
            {/*</Menu.Item>*/}
        </Menu>
    );
}