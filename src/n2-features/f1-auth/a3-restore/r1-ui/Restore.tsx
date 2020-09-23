import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "../../../../n1-main/m1-ui/main/routes/Routes";

type RestorePropsType = {
    email: string;
    setEmail: (value: string) => void;
    onRestore: () => void;
}

export const Restore: React.FC<RestorePropsType> = React.memo((props) => {
    const {email, setEmail, onRestore} = props;
    return (
        <div>
            <div>
                <input type="text" placeholder={'enter you email'} value={email}
                       onChange={(e) => setEmail(e.currentTarget.value)}/>
            </div>
            <button onClick={onRestore}>Sign in</button>
            <div>
                <NavLink to={PATH.LOGIN}>login</NavLink>
            </div>
        </div>
    );
});