import {axiosInstance} from "../../../../n1-main/m3-dal/instance";
import {SetImgType} from "../p2-bll/profileThunk";


export type ResponseDataType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод

    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;

    error: string;
}

export const ProfileAPI ={
    setImage(data:SetImgType){
        return axiosInstance.put('auth/me', data);
    }
}


