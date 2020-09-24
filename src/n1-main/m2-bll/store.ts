import {combineReducers, createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk"
import {loginReducer} from "../../n2-features/f1-auth/a1-login/l2-bll/loginReducer";
import {registerReducer} from "../../n2-features/f1-auth/a2-register/p2-bll/registerReducer";
import {mainReducer} from "./b1-main/mainReducer";
import {profileReducer} from "../../n2-features/f1-auth/a5-profile/p2-bll/profileReducer";
import {restoreReducer} from "../../n2-features/f1-auth/a3-restore/r2-bll/restoreReducer";


const RootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    main: mainReducer,
    restore: restoreReducer,
    // setPass :setPassReducer,
    profile: profileReducer
});

export type AppRootStateType = ReturnType<typeof RootReducer>;

export const store = createStore(RootReducer, applyMiddleware(thunkMiddleware));
// @ts-ignore
window.store = store;
