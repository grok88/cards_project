import {cardsInitialState, CardsInitialStateType} from "./cardsInitialState";

export const cardsReducer = (state:CardsInitialStateType = cardsInitialState, action: any):CardsInitialStateType => {
    switch (action.type) {

        default: {
            return state;
        }
    }
};