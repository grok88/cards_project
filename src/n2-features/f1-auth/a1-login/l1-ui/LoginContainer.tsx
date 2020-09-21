import React, {useState} from "react";
import {Login} from "./Login";

type LoginContainerPropsType = {

}

export const LoginContainer: React.FC<LoginContainerPropsType> = React.memo(() => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [remember, setRemember] = useState<boolean>(false);

    return (
        <Login email={email} password={password} checked={remember}/>
    );
});