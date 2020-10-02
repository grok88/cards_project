import {packsInitialState, PacksInitialStateType} from "./packsInitialState";
import {GET_PACKS, packsReducerActions} from "./packsActions";

export const packsReducer = (state:PacksInitialStateType = packsInitialState, action: packsReducerActions):PacksInitialStateType => {
    switch (action.type) {
        case GET_PACKS:
            return {
                ...state,
               ...action.packs
            }
        default: {
            return state;
        }
    }
};