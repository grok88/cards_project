import {SWActionType, ThunkType} from "../../../../n1-main/m2-bll/thunks";
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {setError, setStatus} from "../../../../n1-main/m2-bll/b1-main/mainActions";
import {AddCardDataType, CardsAPI, UpdateCardDataType} from "../c3-dall/CardsAPI";
import {getCards} from "./cardsActions";

export const getCardTC = (cardsPackId: string, min: number = 2, max: number = 5, page: number = 1, pageCount: number = 4, answer: string = ''): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootStateType, unknown, SWActionType>) => {
        dispatch(setStatus("loading"));
        debugger
        try {

            const data = await CardsAPI.getCards(cardsPackId, max, page, pageCount, answer);

            dispatch(getCards(data.data));
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
export const deleteCardTC = (cardId: string, cardsPackId: string): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootStateType, unknown, SWActionType>) => {
        dispatch(setStatus("loading"));
        // Запросы на API
        try {
            const data = await CardsAPI.deleteCard(cardId);
            dispatch(getCardTC(cardsPackId));
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
            dispatch(getCardTC(data.card.cardsPack_id));
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
export const updateCardTC = (data: UpdateCardDataType, cardsPackId: string): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootStateType, unknown, SWActionType>) => {
        dispatch(setStatus("loading"));
        // Запросы на API
        try {
            await CardsAPI.updateCard(data);
            dispatch(getCardTC(cardsPackId));
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