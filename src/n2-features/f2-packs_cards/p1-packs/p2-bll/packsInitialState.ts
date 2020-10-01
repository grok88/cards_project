export type PacksType = {
    cardsCount: number
    created: string
    grade: number
    more_id: string
    name: string
    path: string
    private: boolean
    rating: number
    shots: number
    type: string
    updated: string
    user_id: string
    user_name: string
    __v: number
    _id: string
}

export type PacksInitialStateType ={
    cardPacks:Array<PacksType>;
    cardPacksTotalCount:null | number,
    maxCardsCount:null | number,
    minCardsCount:null | number,
    page:null | number,
    pageCount:null | number
}
export const packsInitialState: PacksInitialStateType = {
    cardPacks:[],
    cardPacksTotalCount:null,
    maxCardsCount:null,
    minCardsCount:null,
    page:null,
    pageCount:null
};
