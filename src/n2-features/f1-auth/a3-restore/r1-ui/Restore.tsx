import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "../../../../n1-main/m1-ui/main/routes/Routes";
import {RequestStatusType} from "../../../../n1-main/m2-bll/b1-main/mainInitialState";

type RestorePropsType = {
    email: string;
    setEmail: (value: string) => void;
    onRestore: () => void;
    status: RequestStatusType
}

export const Restore: React.FC<RestorePropsType> = React.memo((props) => {
    const {email, setEmail, onRestore, status} = props;
    return (
        <div>
            {status === 'succeeded' ? <div>
                На почту пришло письмо...
            </div> : ''}
            <div>
                <input type="text" placeholder={'enter you email'} value={email}
                       onChange={(e) => setEmail(e.currentTarget.value)}/>
            </div>
            <button onClick={onRestore}>Востановить пароль</button>
            <div>
                <NavLink to={PATH.LOGIN}>login</NavLink>
            </div>
        </div>
    );
});