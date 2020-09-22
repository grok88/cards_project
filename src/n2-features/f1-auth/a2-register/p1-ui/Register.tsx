import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {PATH} from "../../../../n1-main/m1-ui/main/routes/Routes";
import { Redirect } from "react-router-dom";
import {registerTC} from "../p2-bll/registerThunks";

type RegisterPropsType={}

export const Register: React.FC<RegisterPropsType>= React.memo((props) => {

    const isRegisterIn = useSelector<AppRootStateType, boolean>(state => state.register.isRegisterIn)

    const dispatch = useDispatch();
    const [email, setEmail] = useState<string>('gerasimenkodenis7@gmail.com');
    const [password, setPassword] = useState<string>('qwertyu12')
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
                <h2>Register</h2>
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
