import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import {PATH} from "../routes/Routes";
import {Menu} from "antd";

export const DevHeader = () => {
    const location = useLocation();

    //active link from URL
    const { pathname } = location;
    console.log(pathname)


    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} selectedKeys={[pathname]}>
            <Menu.Item key={PATH.LOGIN}>
                <NavLink to={PATH.LOGIN} style={{padding: '10px'}}>login </NavLink>
            </Menu.Item>
            <Menu.Item key={PATH.REGISTER}>
                <NavLink to={PATH.REGISTER} style={{padding: '10px'}}>register</NavLink>
            </Menu.Item>
            <Menu.Item key={PATH.RESTORE}>
                <NavLink to={PATH.RESTORE} style={{padding: '10px'}}>restore</NavLink>
            </Menu.Item>
            <Menu.Item key={PATH.SET_PASS}>
                <NavLink to={PATH.SET_PASS} style={{padding: '10px'}}>set new pass</NavLink>
            </Menu.Item>
            <Menu.Item key={PATH.PROFILE}>
                <NavLink to={PATH.PROFILE} style={{padding: '10px'}}>profile</NavLink>
            </Menu.Item>
            <Menu.Item key={PATH.PACKS}>
                <NavLink to={PATH.PACKS} style={{padding: '10px'}}>packs</NavLink>
            </Menu.Item>
            <Menu.Item key={PATH.FILES}>
                <NavLink to={PATH.FILES} style={{padding: '10px'}}>files</NavLink>
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
