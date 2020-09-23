import React from "react";
import {Redirect, Route} from "react-router-dom";
import {Register} from "../../../../n2-features/f1-auth/a2-register/p1-ui/Register";
import {LoginContainer} from "../../../../n2-features/f1-auth/a1-login/l1-ui/LoginContainer";
import {ProfileContainer} from "../../../../n2-features/f1-auth/a5-profile/p1-ui/ProfileContainer";

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
            <Route path={'/'} render={() => <Redirect to={PATH.LOGIN}/>}/>
            <Route path={PATH.LOGIN} render={() => <LoginContainer/>}/>
            <Route path={PATH.REGISTER} render={() => <Register/>}/>
            {/*<Route path={PATH.RESTORE} render={() => <Restore/>}/>*/}
            {/*<Route path={PATH.SET_PASS} render={() => <SetPass/>}/>*/}
            <Route path={PATH.PROFILE} render={() => <ProfileContainer/>}/>
        </div>
    );
}