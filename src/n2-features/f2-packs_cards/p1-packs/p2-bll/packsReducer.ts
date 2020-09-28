import {packsInitialState, PacksInitialStateType} from "./packsInitialState";

export const packsReducer = (state:PacksInitialStateType = packsInitialState, action: any):PacksInitialStateType => {
    switch (action.type) {

        default: {
            return state;
        }
    }
};