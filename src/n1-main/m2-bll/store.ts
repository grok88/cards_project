import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {loginReducer} from "../../n2-features/f1-auth/a1-login/l2-bll/loginReducer";
import {registerReducer} from "../../n2-features/f1-auth/a2-register/p2-bll/registerReducer";
import {mainReducer} from "./b1-main/mainReducer";
import {profileReducer} from "../../n2-features/f1-auth/a5-profile/p2-bll/profileReducer";
import {restoreReducer} from "../../n2-features/f1-auth/a3-restore/r2-bll/restoreReducer";
import {setPassReducer} from "../../n2-features/f1-auth/a4-setPass/s2-bll/setPassReducer";
import {packsReducer} from "../../n2-features/f2-packs_cards/p1-packs/p2-bll/packsReducer";


const RootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    main: mainReducer,
    restore: restoreReducer,
    setPass: setPassReducer,
    profile: profileReducer,
    packs: packsReducer
});

export type AppRootStateType = ReturnType<typeof RootReducer>;

export const store = createStore(RootReducer, applyMiddleware(thunkMiddleware));
// @ts-ignore
window.store = store;
