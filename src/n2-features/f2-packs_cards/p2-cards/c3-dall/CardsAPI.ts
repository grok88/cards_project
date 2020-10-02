import {axiosInstance} from "../../../../n1-main/m3-dal/instance";

export type AddCardDataType = {
    card: {
        cardsPack_id: string
    }
}
export type UpdateCardDataType = {
    card: {
        _id: string
    }
}
export const CardsAPI = {
    getCards(cardsPackId: any) {
        return axiosInstance.get(`/cards/card?cardsPack_id=${cardsPackId}`);
    },
    deleteCard(cardId: string) {
        return axiosInstance.delete(`/cards/card?id=${cardId}`);
    },
    addCard(data: AddCardDataType) {
        return axiosInstance.post(`/cards/card`, data);
    },
    updateCard(data: UpdateCardDataType) {
        return axiosInstance.put(`/cards/card`, data);
    }
}