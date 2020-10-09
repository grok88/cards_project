import {axiosInstance} from "../../../../n1-main/m3-dal/instance";
import {CardsType} from "../c2-bll/cardsInitialState";

export type AddCardDataType = {
    cardsPack_id: string,
    question: string
}
export type UpdateCardDataType = {
    _id: string
    question?: string
    answer?: string
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

export const CardsAPI = {
    getCards(cardsPackId: string, max: number, page: number, pageCount: number, cardQuestion: string, min: number) {
        return axiosInstance.get<ResponseCardsDataType>(`/cards/card?cardsPack_id=${cardsPackId}&max=${max}&min=${min}&page=${page}&pageCount=${pageCount}&cardQuestion=${cardQuestion}`);
    },
    deleteCard(cardId: string) {
        return axiosInstance.delete<{ deletedCard: CardsType }>(`/cards/card?id=${cardId}`);
    },
    addCard(data: AddCardDataType) {
        return axiosInstance.post<{ newCard: CardsType }>(`/cards/card`, {card: data}).then(res => res.data);
    },
    updateCard(data: UpdateCardDataType) {
        return axiosInstance.put<{ updatedCard: CardsType }>(`/cards/card`, {card:data}).then(res => res.data);
    },
    setGrade(grade: number, card_id: string) {
        return axiosInstance.put(`/cards/grade`, {grade, card_id});
    }
}