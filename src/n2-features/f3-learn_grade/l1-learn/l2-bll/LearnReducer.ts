import {learnInitialState, LearnInitialStateType} from "./LearnInitialState";
import {LearnReducerActions} from "./LearnActions";


export const learnReducer = (state: LearnInitialStateType = learnInitialState, action: LearnReducerActions): LearnInitialStateType => {
    switch (action.type) {

        default: {
            return state;
        }
    }
};