import {CardsInitialStateType, CardsType} from "./cardsInitialState";
import {UpdateCardDataType} from "../c3-dall/CardsAPI";

export const GET_CARDS = 'CARDS/GET_CARDS';
export const ADD_CARD = 'CARDS/ADD_CARD';
export const DELETE_CARD = 'CARDS/DELETE_CARD';
export const UPDATE_CARD = 'CARDS/UPDATE_CARD';

type GetCardsACType = ReturnType<typeof getCards>;
type AddCardACType = ReturnType<typeof addCard>;
type DeleteCardACType = ReturnType<typeof deleteCard>;
type UpdateCardACType = ReturnType<typeof updateCard>;

export type cardsReducerActions = GetCardsACType | AddCardACType | DeleteCardACType | UpdateCardACType;

export const getCards = (cards: CardsInitialStateType) => {
    return {
        type: GET_CARDS,
        cards
    } as const
}
export const addCard = (card: CardsType) => {
    return {
        type: ADD_CARD,
        card
    } as const
}
export const deleteCard = (cardId: string) => {
    return {
        type: DELETE_CARD,
        cardId
    } as const
}

export const updateCard = (data: CardsType) => {
    return {
        type: UPDATE_CARD,
        data
    } as const
}