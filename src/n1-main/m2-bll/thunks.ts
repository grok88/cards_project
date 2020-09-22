import {loginReducerActions} from "../../n2-features/f1-auth/a1-login/l2-bll/loginActions";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./store";
import {registerReducerActions} from "../../n2-features/f1-auth/a2-register/p2-bll/registerActions";
import {mainReducerActions} from "./b1-main/mainActions";
import {profileReducerActions} from "../../n2-features/f1-auth/a5-profile/p2-bll/profileActions";

export type SWActionType =
    | loginReducerActions
    | registerReducerActions
    | mainReducerActions
    | profileReducerActions;
// and add other reducers Actions;

export type ThunkType = ThunkAction<void, AppRootStateType, unknown, SWActionType>;