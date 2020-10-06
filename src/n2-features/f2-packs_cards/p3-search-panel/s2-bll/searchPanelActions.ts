export const SET_SEARCH_INPUT_VALUE = 'SEARCH_PANEL/SET_SEARCH_INPUT_VALUE';
export const SET_MIN_CARDS_COUNT = 'SEARCH_PANEL/SET_MIN_CARDS_COUNT';
export const SET_MAX_CARDS_COUNT = 'SEARCH_PANEL/SET_MAX_CARDS_COUNT';
export const SET_MIN_GRADE = 'SEARCH_PANEL/SET_MIN_GRADE';
export const SET_MAX_GRADE = 'SEARCH_PANEL/SET_MAX_GRADE';

type SetSearchInputValueACType = ReturnType<typeof setSearchInputValue>;
type SetMinCardsCountACType = ReturnType<typeof setMinCardsCount>;
type SetMaxCardsCountACType = ReturnType<typeof setMaxCardsCount>;
type SetMinGradeACType = ReturnType<typeof setMinGrade>;
type SetMaxGradeACType = ReturnType<typeof setMaxGrade>;

export type searchPanelReducerActions =
    | SetSearchInputValueACType
    | SetMinCardsCountACType
    | SetMaxCardsCountACType
    | SetMinGradeACType
    | SetMaxGradeACType;

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
export const setMinGrade = (minGrade: number) => {
    return {
        type: SET_MIN_GRADE,
        minGrade
    } as const
}
export const setMaxGrade = (maxGrade: number) => {
    return {
        type: SET_MAX_GRADE,
        maxGrade
    } as const
}
