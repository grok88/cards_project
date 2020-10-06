export type searchPanelInitialStateType = {
    searchValue: string;
    minCardsCount: number;
    maxCardsCount: number;
    maxGrade:number;
    minGrade: number;
}
export const searchPanelInitialState: searchPanelInitialStateType = {
    searchValue: '',
    minCardsCount: 0,
    maxCardsCount: 16,
    maxGrade:5,
    minGrade: 0
};
