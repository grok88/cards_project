import React from "react";
import {Redirect, Route} from "react-router-dom";
import {Register} from "../../../../n2-features/f1-auth/a2-register/p1-ui/Register";
import {LoginContainer} from "../../../../n2-features/f1-auth/a1-login/l1-ui/LoginContainer";
import {ProfileContainer} from "../../../../n2-features/f1-auth/a5-profile/p1-ui/ProfileContainer";
import {RestoreContainer} from "../../../../n2-features/f1-auth/a3-restore/r1-ui/RestoreContainer";
import {SetPass} from "../../../../n2-features/f1-auth/a4-setPass/s1-ui/SetPass";
import {Packs} from "../../../../n2-features/f2-packs_cards/p1-packs/p1-ui/Packs";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../m2-bll/store";
import {RequestStatusType} from "../../../m2-bll/b1-main/mainInitialState";
import Preloader from "../../../../n0-common/c1-ui/preloader/Preloader";
import {Cards} from "../../../../n2-features/f2-packs_cards/p2-cards/c1-ui/Cards";
import {Learn} from "../../../../n2-features/f3-learn_grade/l1-learn/l1-ui/Learn";

export const PATH = {
    LOGIN: '/login',
    REGISTER: '/register',
    RESTORE: '/restore',
    SET_PASS: '/set-new-password/:token',
    PROFILE: '/profile',
    PACKS: '/packs',
    CARDS: '/cards/:id?',
    LEARN: '/learn/:id?',

}
export const Routes = () => {
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.main.status);
    return (
        <div>
            {status === 'loading' && <Preloader/>}
            <Route exact path={'/'} render={() => <Redirect to={PATH.LOGIN}/>}/>
            <Route path={PATH.LOGIN} render={() => <LoginContainer/>}/>
            <Route path={PATH.REGISTER} render={() => <Register/>}/>
            <Route path={PATH.RESTORE} render={() => <RestoreContainer/>}/>
            <Route path={PATH.SET_PASS} render={() => <SetPass/>}/>
            <Route path={PATH.PROFILE} render={() => <ProfileContainer/>}/>
            <Route path={PATH.PACKS} render={() => <Packs/>}/>
            <Route path={PATH.CARDS} render={() => <Cards/>}/>
            <Route path={PATH.LEARN} render={() => <Learn/>}/>
        </div>
    );
}