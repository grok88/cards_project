export type searchPanelInitialStateType = {
    searchValue: string;
    minCardsCount: number;
    maxCardsCount: number;
}
export const searchPanelInitialState: searchPanelInitialStateType = {
    searchValue: '',
    minCardsCount: 0,
    maxCardsCount: 16
};
