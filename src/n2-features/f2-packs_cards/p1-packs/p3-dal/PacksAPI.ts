import {axiosInstance} from "../../../../n1-main/m3-dal/instance";
import {PacksType} from "../p2-bll/packsInitialState";

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
export type ResponsePacksDataType = {
    packs:Array<PacksType>
    cardPacksTotalCount: number // количество колод
    maxCardsCount: number
    minCardsCount:number
    page: number // выбранная страница
    pageCount:number// количество элементов на странице
}
export const PacksAPI = {
    getPacks(pageCount:number,page:number,min:number, max:number, name:string) {
        return axiosInstance.get<ResponsePacksDataType>(`/cards/pack?pageCount=${pageCount}&page=${page}&min=${min}&max=${max}&packName=${name}`);
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


