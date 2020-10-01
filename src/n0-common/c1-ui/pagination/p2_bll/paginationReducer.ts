import {paginationInitialState, PaginationInitialStateType} from "./paginationInitialState";
import {PaginationReducerActions} from "./paginationActions";

export const paginationReducer = (state: PaginationInitialStateType = paginationInitialState, action: PaginationReducerActions): PaginationInitialStateType => {
    switch (action.type) {
        case "PAGINATION/SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "PAGINATION/SET_PAGE_SIZE":
            return {
                ...state,
                pageSize: action.pageSize
            }
        default: {
            return state;
        }
    }
};