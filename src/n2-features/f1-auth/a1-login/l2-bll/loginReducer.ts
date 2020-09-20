import {LOGIN_IN, loginReducerActions} from "./loginActions";
import { loginInitialState } from "./loginInitialState";

export const loginReducer = (state = loginInitialState, action: loginReducerActions) => {
    switch (action.type) {
        case LOGIN_IN: { // blank
            return {
                ...state,

            }
        }

        default: {
            return state;
        }
    }
};