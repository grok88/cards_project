import {loginReducerActions} from "../../n2-features/f1-auth/a1-login/l2-bll/loginActions";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./store";

export type SWActionType = loginReducerActions; // and add other reducers Actions;

export type ThunkType = ThunkAction<void, AppRootStateType, unknown, SWActionType>;