import {SET_PASS_IN, setPassReducerActions} from "./setPassActions";
import {setPassInitialState, SetPassInitialStateType} from "./setPassInitialState";

export const setPassReducer = (state: SetPassInitialStateType = setPassInitialState, action: setPassReducerActions) => {
    switch (action.type) {
        case SET_PASS_IN: { // blank
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