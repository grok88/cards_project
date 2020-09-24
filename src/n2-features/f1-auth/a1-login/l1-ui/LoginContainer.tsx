import React, {useCallback, useEffect, useState} from "react";
import {Login} from "./Login";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../l2-bll/loginThunk";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {Redirect} from "react-router-dom";
import {PATH} from "../../../../n1-main/m1-ui/main/routes/Routes";
import {RequestStatusType} from "../../../../n1-main/m2-bll/b1-main/mainInitialState";
import {Status} from "../../../../n0-common/c1-ui/status/Status";
import {setLoginError} from "../l2-bll/loginActions";
import {setError, setStatus} from "../../../../n1-main/m2-bll/b1-main/mainActions";

type LoginContainerPropsType = {}

export const LoginContainer: React.FC<LoginContainerPropsType> = React.memo(() => {


    const isLoginIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoginIn);
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.main.status);
    const error = useSelector<AppRootStateType, null | string>(state => state.login.error);

    const dispatch = useDispatch();

    const [email, setEmail] = useState<string>('grok88@tut.by');
    const [password, setPassword] = useState<string>('alexgor88');
    const [remember, setRemember] = useState<boolean>(false);
    const [flag, setFlag] = useState<boolean>(false);

debugger
       // if(error) {
       //     debugger
       //     dispatch(setLoginError(''));
       // }

    const onLogin = useCallback(() => {
        dispatch(loginTC({email, password, rememberMe: remember}));
    }, [email, password, remember]);


    if (isLoginIn) {
        setTimeout(() => {
            setFlag(true)
        }, 2000)
    }
    if (flag) {
        return <Redirect to={PATH.PROFILE}/>
    }

    return (
        <div style={{
            width: '40%',
            outline: '1px solid red',
            margin: '0 auto',
            display: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            alignItems: 'center'
        }}>
            <Status title={'Login'} status={status} error={error}/>
            <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} checked={remember}
                   setChecked={setRemember} onLogin={onLogin}/>
        </div>
    );
});