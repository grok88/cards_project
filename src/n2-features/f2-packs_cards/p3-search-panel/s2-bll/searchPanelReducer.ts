import {searchPanelInitialState, searchPanelInitialStateType} from "./searchPanelInitialState";
import {searchPanelReducerActions, SET_MIN_CARDS_COUNT, SET_SEARCH_INPUT_VALUE} from "./searchPanelActions";

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
        case "SEARCH_PANEL/SET_MAX_CARDS_COUNT":
            return {
                ...state,
                maxCardsCount: action.maxCardsCount
            }
        default: {
            return state;
        }
    }
};