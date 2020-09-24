import {profileReducerActions, SET_USER} from "./profileActions";
import {profileInitialState, ProfileInitialStateType} from "./profileInitialState";

export const profileReducer = (state: ProfileInitialStateType = profileInitialState, action: profileReducerActions) => {
    switch (action.type) {
        case SET_USER: { // blank
            return {
                ...state,
                user: action.user
            }
        }

        default: {
            return state;
        }
    }
};