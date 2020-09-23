import {LOGIN_IN, loginReducerActions, SET_LOGIN_ERROR} from "./loginActions";
import {loginInitialState, LoginInitialStateType} from "./loginInitialState";

export const loginReducer = (state:LoginInitialStateType = loginInitialState, action: loginReducerActions) => {
    switch (action.type) {
        case LOGIN_IN: { // blank
            return {
                ...state,
                isLoginIn: true
            }
        }
        case SET_LOGIN_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
};