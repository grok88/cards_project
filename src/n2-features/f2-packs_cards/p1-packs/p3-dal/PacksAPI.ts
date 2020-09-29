import {axiosInstance} from "../../../../n1-main/m3-dal/instance";

export const PacksAPI = {
    getPacks() {
        return axiosInstance.get('/cards/pack?pageCount=10');
    },
    deletePack(packId: string) {
        return axiosInstance.delete(`/cards/pack?id=${packId}`);
    }
}


