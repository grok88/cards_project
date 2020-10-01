import {cardsReducerActions, GET_CARDS} from "./cardsActions";
import {cardsInitialState, CardsInitialStateType} from "./cardsInitialState";

export const cardsReducer = (state: CardsInitialStateType = cardsInitialState, action: cardsReducerActions): CardsInitialStateType => {
    switch (action.type) {
        case GET_CARDS:
            return {
                ...state,
                cards: action.cards
            }
        default: {
            return state;
        }
    }
};