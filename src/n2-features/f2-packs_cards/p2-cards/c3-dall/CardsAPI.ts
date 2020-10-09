import {axiosInstance} from "../../../../n1-main/m3-dal/instance";
import {CardsType} from "../c2-bll/cardsInitialState";

export type AddCardDataType = {
    card: {
        cardsPack_id: string,
        question: string
    }
}
export type UpdateCardDataType = {
    card: {
        _id: string
    }
}

export type ResponseCardsDataType = {
    cards: Array<CardsType>
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
}
//cardsPackId: string, min: number, max: number, page: number, pageCount: number,answer:string
//return axiosInstance.get<ResponseCardsDataType>(`/cards/card?cardsPack_id=${cardsPackId}&min=${min}&max=${max}&page=${page}&pageCount=${pageCount}&cardAnswer=${answer}`);


type ResponseSetGradeType = {
    updatedGrade: {
        _id: string;
        cardsPack_id: string;
        card_id: string;
        user_id: string;
        grade: number;
        shots: number;
    }
}
export const CardsAPI = {
    getCards(cardsPackId: string, max: number, page: number, pageCount: number, cardQuestion: string, min: number) {
        return axiosInstance.get<ResponseCardsDataType>(`/cards/card?cardsPack_id=${cardsPackId}&max=${max}&min=${min}&page=${page}&pageCount=${pageCount}&cardQuestion=${cardQuestion}`);
    },
    deleteCard(cardId: string) {
        return axiosInstance.delete(`/cards/card?id=${cardId}`);
    },
    addCard(data: AddCardDataType) {
        return axiosInstance.post(`/cards/card`, data);
    },
    updateCard(data: UpdateCardDataType) {
        return axiosInstance.put(`/cards/card`, data);
    },
    setGrade(grade: number, card_id: string) {
        return axiosInstance.put(`/cards/grade`, {grade, card_id});
    }
}