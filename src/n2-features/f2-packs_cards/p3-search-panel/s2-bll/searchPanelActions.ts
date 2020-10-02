export const SET_SEARCH_INPUT_VALUE = 'SEARCH_PANEL/SET_SEARCH_INPUT_VALUE';
export const SET_MIN_CARDS_COUNT = 'SEARCH_PANEL/SET_MIN_CARDS_COUNT';
export const SET_MAX_CARDS_COUNT = 'SEARCH_PANEL/SET_MAX_CARDS_COUNT';

type SetSearchInputValueACType = ReturnType<typeof setSearchInputValue>;
type SetMinCardsCountACType = ReturnType<typeof setMinCardsCount>;
type SetMaxCardsCountACType = ReturnType<typeof setMaxCardsCount>;

export type searchPanelReducerActions = SetSearchInputValueACType | SetMinCardsCountACType | SetMaxCardsCountACType  ;

export const setSearchInputValue = (searchValue: string) => {
    return {
        type: SET_SEARCH_INPUT_VALUE,
        searchValue
    } as const
}
export const setMinCardsCount = (minCardsCount: number) => {
    return {
        type: SET_MIN_CARDS_COUNT,
        minCardsCount
    } as const
}
export const setMaxCardsCount = (maxCardsCount: number) => {
    return {
        type: SET_MAX_CARDS_COUNT,
        maxCardsCount
    } as const
}
