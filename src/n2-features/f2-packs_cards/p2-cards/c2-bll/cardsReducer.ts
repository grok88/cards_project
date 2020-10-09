import {ADD_CARD, cardsReducerActions, DELETE_CARD, GET_CARDS, UPDATE_CARD} from "./cardsActions";
import {cardsInitialState, CardsInitialStateType} from "./cardsInitialState";

export const cardsReducer = (state: CardsInitialStateType = cardsInitialState, action: cardsReducerActions): CardsInitialStateType => {
    switch (action.type) {
        case GET_CARDS:
            return {
                ...state,
                ...action.cards
            }
            case ADD_CARD:
            return {
                ...state,
                cards: [...state.cards, action.card]
            }
        case DELETE_CARD:
            return {
                ...state,
                cards: state.cards.filter(card => card._id !== action.cardId)
            }
        case UPDATE_CARD:
            return {
                ...state,
                cards: state.cards.map(card => {
                    if(card._id === action.data._id){
                        return {...card, ...action.data}
                    } else {
                        return card
                    }
                })
            }
        default: {
            return state;
        }
    }
};