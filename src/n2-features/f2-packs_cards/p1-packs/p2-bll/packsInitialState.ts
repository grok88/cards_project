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
    packs:Array<PacksType>
}

export const packsInitialState:PacksInitialStateType = {
    packs:[]
};
