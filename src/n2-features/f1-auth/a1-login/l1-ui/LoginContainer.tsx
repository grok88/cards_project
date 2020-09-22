import React, {useCallback, useState} from "react";
import {Login} from "./Login";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../l2-bll/loginThunk";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import { Redirect } from "react-router-dom";
import {PATH} from "../../../../n1-main/m1-ui/main/routes/Routes";

type LoginContainerPropsType = {}

export const LoginContainer: React.FC<LoginContainerPropsType> = React.memo(() => {

    const isLoginIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoginIn);
    const dispatch = useDispatch();

    const [email, setEmail] = useState<string>('grok88@tut.by');
    const [password, setPassword] = useState<string>('alexgor88');
    const [remember, setRemember] = useState<boolean>(false);

    const onLogin = useCallback(() => {
        dispatch(loginTC({email, password, rememberMe: remember}));
    },[email, password, remember]);


    if(isLoginIn){
        return <Redirect to={PATH.PROFILE}/>
    }
    return (
        <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} checked={remember}
               setChecked={setRemember} onLogin={onLogin}/>
    );
});