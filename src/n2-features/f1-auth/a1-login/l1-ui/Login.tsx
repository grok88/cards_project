import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "../../../../n1-main/m1-ui/main/routes/Routes";
import {Button} from "antd";

type LoginPropsType = {
    email: string;
    setEmail: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
    checked: boolean;
    setChecked: (value: boolean) => void;
    onLogin:() => void;
}

export const Login: React.FC<LoginPropsType> = React.memo((props) => {

    const {email, password, checked, setEmail, setPassword, setChecked, onLogin} = props;

    return (
        <div >
            <div>
                <input type="text" placeholder={'enter you email'} value={email}
                       onChange={(e) => setEmail(e.currentTarget.value)}/>
            </div>
            <div>
                <input type="text" placeholder={'enter you password'} value={password}
                       onChange={(e) => setPassword(e.currentTarget.value)}/>
            </div>
            <div>
                <label>
                    Remember Me
                    <input type="checkbox" name="check" checked={checked}
                           onChange={(e) => setChecked(e.currentTarget.checked)}/>
                </label>
            </div>
            <div>
                <NavLink to={PATH.RESTORE}>Востановить пароль?</NavLink>
            </div>
            <Button onClick={onLogin}>Sign in</Button>
            <div>
                <NavLink to={PATH.REGISTER}>Регистрация</NavLink>
            </div>
        </div>
    );
});