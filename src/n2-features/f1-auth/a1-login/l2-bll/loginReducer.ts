import {LOGIN_IN, loginReducerActions, SET_LOGIN_ERROR} from "./loginActions";
import {loginInitialState, LoginInitialStateType} from "./loginInitialState";

export const loginReducer = (state:LoginInitialStateType = loginInitialState, action: loginReducerActions) => {
    switch (action.type) {
        case LOGIN_IN: { // blank
            return {
                ...state,
                isLoginIn: action.value
            }
        }

        default: {
            return state;
        }
    }
};