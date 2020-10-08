export type CardsType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    rating: number
    shots: number
    type: string
    user_id: string
    created: string
    updated: string
    __v: number
    _id: string
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number


}
export type CardsInitialStateType = {
    cards: Array<CardsType>
    cardsTotalCount: number
    maxGrade:number
    minGrade:number
    page:number
    pageCount:number


}

export const cardsInitialState: CardsInitialStateType = {
    cards: [],
    cardsTotalCount: 3,
    maxGrade:5,
    minGrade: 2,
    page:1,
    pageCount:4
};