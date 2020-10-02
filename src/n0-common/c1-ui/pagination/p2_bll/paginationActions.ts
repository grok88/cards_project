export const SET_CURRENT_PAGE = 'PAGINATION/SET_CURRENT_PAGE';
export const SET_PAGE_SIZE = 'PAGINATION/SET_PAGE_SIZE';

type SetCurrentPageACType = ReturnType<typeof setCurrentPage>;
type SetPageSizeACType = ReturnType<typeof setPageSize>;

export type PaginationReducerActions = SetCurrentPageACType | SetPageSizeACType ;

export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}
export const setPageSize = (pageSize: number) => {
    return {
        type: SET_PAGE_SIZE,
        pageSize
    } as const
}
