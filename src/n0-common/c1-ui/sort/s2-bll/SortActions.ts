export const SORT = 'SORT/SORT';

type SortACType = ReturnType<typeof sortByField>;

export type SortReducerActions = SortACType;
export const sortByField = (sort: string) => {
    return {
        type: SORT,
        sort
    } as const
}
