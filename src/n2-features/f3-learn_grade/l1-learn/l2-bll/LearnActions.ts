import {PaginationReducerActions} from "../../../../n0-common/c1-ui/pagination/p2_bll/paginationActions";

export const SET_SEARCH_INPUT_VALUE = 'SEARCH_PANEL/SET_SEARCH_INPUT_VALUE';


type LearnACType = ReturnType<typeof setSearchInputValue>;


export type LearnReducerActions = LearnACType   ;

export const setSearchInputValue = (searchValue: string) => {
    return {
        type: SET_SEARCH_INPUT_VALUE,
        searchValue
    } as const
}
