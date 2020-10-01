import {CardsType} from "./cardsInitialState";

export const GET_CARDS = 'CARDS/GET_CARDS';

type GetCardsACType = ReturnType<typeof getCards>;

export type cardsReducerActions = GetCardsACType ;

export const getCards = (cards: Array<CardsType>) => {
    return {
        type: GET_CARDS,
        cards
    } as const
}