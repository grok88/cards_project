import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {PATH} from "../../../../n1-main/m1-ui/main/routes/Routes";
import { Redirect } from "react-router-dom";
import {registerTC} from "../p2-bll/registerThunks";
import {Status} from "../../../../n0-common/c1-ui/status/Status";
import {RequestStatusType} from "../../../../n1-main/m2-bll/b1-main/mainInitialState";
import {setError, setStatus} from "../../../../n1-main/m2-bll/b1-main/mainActions";

type RegisterPropsType={}

export const Register: React.FC<RegisterPropsType>= React.memo((props) => {

    const isRegisterIn = useSelector<AppRootStateType, boolean>(state => state.register.isRegisterIn)
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.main.status);
    const error = useSelector<AppRootStateType, null | string>(state => state.main.error);


    const dispatch = useDispatch();
    const [email, setEmail] = useState<string>('gerasimenkodenis7@gmail.com');
    const [password, setPassword] = useState<string>('qwertyu12');

    const [firstVisited, setFirstVisited] = useState<boolean>(true);

    useEffect(() => {
        if (firstVisited) {
            dispatch(setError(''));
            dispatch(setStatus('idle'));
            setFirstVisited(false);
        }
    }, [firstVisited,setFirstVisited]);

    const onRegister=()=>{
        dispatch(registerTC({email,password}))

    }

    if (isRegisterIn) {
        return <Redirect to={PATH.LOGIN}/>
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
                <Status title={'Register'} status={status} error={error}/>

                <div>
                    <input type="text" placeholder={'enter you email'} value={email}
                           onChange={(e) => setEmail(e.currentTarget.value)}/>
                </div>
                <div>
                    <input type="text" placeholder={'enter you password'} value={password}
                           onChange={(e) => setPassword(e.currentTarget.value)}/>
                </div>
                <button onClick={onRegister}>sign up</button>
            </div>
            );
            });
