import {registerInitialState} from "./registerInitialState";
import {REGISTER, registerReducerActions} from "./registerActions";



export const registerReducer = (state = registerInitialState, action: registerReducerActions) => {
    switch (action.type) {
        case REGISTER: { // blank
            return {
                ...state,

            }
        }

        default: {
            return state;
        }
    }
};