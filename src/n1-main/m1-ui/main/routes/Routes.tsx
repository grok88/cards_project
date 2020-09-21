import React from "react";
import {Route} from "react-router-dom";
import {Login} from "../../../../n2-features/f1-auth/a1-login/l1-ui/Login";
import {Register} from "../../../../n2-features/f1-auth/a2-register/p1-ui/Register";

export const PATH = {
    LOGIN: '/login',
    REGISTER: '/register',
    RESTORE: '/restore',
    SET_PASS: '/set-pass',
    PROFILE: '/profile'
}
export const Routes = () => {
    return (
        <div>
            <Route path={PATH.LOGIN} render={() => <Login/>}/>
            <Route path={PATH.REGISTER} render={() => <Register/>}/>
            {/*<Route path={PATH.RESTORE} render={() => <Restore/>}/>*/}
            {/*<Route path={PATH.SET_PASS} render={() => <SetPass/>}/>*/}
            {/*<Route path={PATH.PROFILE} render={() => <Profile/>}/>*/}
        </div>
    );
}