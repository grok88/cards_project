import {SORT, SortReducerActions} from "./SortActions";
import {sortInitialState, SortInitialStateType} from "./SortInitialState";

export const sortReducer = (state: SortInitialStateType = sortInitialState, action: SortReducerActions): SortInitialStateType => {
    switch (action.type) {
        case SORT:
            return {
                ...state,
                sort: action.sort
            }

        default: {
            return state;
        }
    }
};