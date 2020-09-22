import {registerInitialState} from "./registerInitialState";
import {REGISTER_IN, registerReducerActions} from "./registerActions";



export const registerReducer = (state = registerInitialState, action: registerReducerActions) => {
    switch (action.type) {
        case REGISTER_IN: { // blank
            return {
                ...state,
                isRegisterIn:true

            }
        }

        default: {
            return state;
        }
    }
};