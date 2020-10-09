import {SWActionType, ThunkType} from "../../../../n1-main/m2-bll/thunks";
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {setError, setStatus} from "../../../../n1-main/m2-bll/b1-main/mainActions";
import {AddCardDataType, CardsAPI, UpdateCardDataType} from "../c3-dall/CardsAPI";
import {addCard, deleteCard, getCards, updateCard} from "./cardsActions";

export const getCardTC = (cardsPackId: string, cardQuestion: string = '', min: number = 0, max: number = 0, page: number = 1, pageCount: number = 4): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootStateType, unknown, SWActionType>) => {
        dispatch(setStatus("loading"));
        try {
            const data = await CardsAPI.getCards(cardsPackId, max, page, pageCount, cardQuestion,min);

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
export const deleteCardTC = (cardId: string): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootStateType, unknown, SWActionType>) => {
        dispatch(setStatus("loading"));
        // Запросы на API
        try {
            const data = await CardsAPI.deleteCard(cardId);

            // dispatch(getCardTC(cardsPackId));
            dispatch(deleteCard(cardId))
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
            const res = await CardsAPI.addCard(data);
            dispatch(addCard(res.newCard))
            // dispatch(getCardTC(data.cardsPack_id, data.question));
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
        try {
            const res = await CardsAPI.updateCard(data);

            dispatch(updateCard(res.updatedCard))
            // dispatch(getCardTC(cardsPackId));
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
export const setGradeTC = (grade:number, card_id:string, cardsPackId:string): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootStateType, unknown, SWActionType>) => {
        dispatch(setStatus("loading"));
        // Запросы на API
        try {
            const res = await CardsAPI.setGrade(grade,card_id );
            // dispatch(getCardTC(cardsPackId));
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