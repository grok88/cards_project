import {combineReducers, createStore, applyMiddleware} from "redux";
import  thunkMiddleware from "redux-thunk"
import {loginReducer} from "../../n2-features/f1-auth/a1-login/l2-bll/loginReducer";

const RootReducer = combineReducers({
    login:loginReducer,
    // register:registerReducer,
    // restorePass:restorePassReducer,
    // setPass :setPassReducer,
    // profile:profileReducer
});

export type AppRootStateType = ReturnType<typeof RootReducer>;

export const store = createStore(RootReducer,applyMiddleware(thunkMiddleware));
// @ts-ignore
window.store = store;
