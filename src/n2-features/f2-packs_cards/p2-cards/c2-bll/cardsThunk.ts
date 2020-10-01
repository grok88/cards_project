import {SWActionType, ThunkType} from "../../../../n1-main/m2-bll/thunks";
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {setError, setStatus} from "../../../../n1-main/m2-bll/b1-main/mainActions";
import {AddCardDataType, CardsAPI, UpdateCardDataType} from "../c3-dall/CardsAPI";
import {getCards} from "./cardsActions";

export const cardTC = (cardsPackId: any): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootStateType, unknown, SWActionType>) => {
        dispatch(setStatus("loading"));
        try {
            const data = await CardsAPI.getCards(cardsPackId);
            dispatch(getCards(data.data.cards));
            dispatch(setStatus("succeeded"));
        } catch (e) {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setError(error));
            dispatch(setStatus("failed"));
        }
    }
}
export const deleteCardTC = (cardId: string): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootStateType, unknown, SWActionType>) => {
        dispatch(setStatus("loading"));
        // Запросы на API
        try {
          const data= await CardsAPI.deleteCard(cardId);
            dispatch(cardTC(cardId));
            dispatch(setStatus("succeeded"));
        } catch (e) {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setError(error));
            dispatch(setStatus("failed"));
        }
    }
}
export const addCardTC = (data: AddCardDataType): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootStateType, unknown, SWActionType>) => {
        dispatch(setStatus("loading"));
        // Запросы на API
        try {
            await CardsAPI.addCard(data);
            dispatch(cardTC(data.card.cardsPack_id));
            dispatch(setStatus("succeeded"));
        } catch (e) {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setError(error));
            dispatch(setStatus("failed"));
        }
    }
}
export const updateCardTC = (data: UpdateCardDataType): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootStateType, unknown, SWActionType>) => {
        dispatch(setStatus("loading"));
        // Запросы на API
        try {
            await CardsAPI.updateCard(data);
            dispatch(cardTC(data));
            dispatch(setStatus("succeeded"));
        } catch (e) {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setError(error));
            dispatch(setStatus("failed"));
        }
    }
}