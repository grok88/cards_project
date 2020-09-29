import {axiosInstance} from "../../../../n1-main/m3-dal/instance";

 export type AddPackDataType = {
    cardsPack:{
        name:string
    }
}
export type UpdatePackDataType = {
    cardsPack:{
        _id:string
        name?:string
    }
}
export const PacksAPI = {
    getPacks() {
        return axiosInstance.get('/cards/pack?pageCount=10');
    },
    deletePack(packId: string) {
        return axiosInstance.delete(`/cards/pack?id=${packId}`);
    } ,
    addPack(data:AddPackDataType) {
        return axiosInstance.post(`/cards/pack`, data);
    },
   updatePack(data:UpdatePackDataType) {
        return axiosInstance.put(`/cards/pack`, data);
    }
}


