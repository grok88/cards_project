import {searchPanelInitialState, searchPanelInitialStateType} from "./searchPanelInitialState";
import {
    searchPanelReducerActions,
    SET_MAX_CARDS_COUNT, SET_MAX_GRADE,
    SET_MIN_CARDS_COUNT, SET_MIN_GRADE,
    SET_SEARCH_INPUT_VALUE
} from "./searchPanelActions";

export const searchPanelReducer = (state: searchPanelInitialStateType = searchPanelInitialState, action: searchPanelReducerActions): searchPanelInitialStateType => {
    switch (action.type) {
        case SET_SEARCH_INPUT_VALUE:
            return {
                ...state,
                searchValue: action.searchValue
            }
        case SET_MIN_CARDS_COUNT:
            return {
                ...state,
                minCardsCount: action.minCardsCount
            }
        case SET_MAX_CARDS_COUNT:
            return {
                ...state,
                maxCardsCount: action.maxCardsCount
            }
        case SET_MIN_GRADE:
            return {
                ...state,
                minGrade: action.minGrade
            }
        case SET_MAX_GRADE:
            return {
                ...state,
                maxGrade: action.maxGrade
            }
        default: {
            return state;
        }
    }
};