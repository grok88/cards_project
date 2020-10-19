import {axiosInstance} from "../../../../n1-main/m3-dal/instance";

export type LoginDataType = {
    email:string;
    password:string;
    rememberMe:boolean
}

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
    token:string;
    error: string;
}

export type RespLogOutType = {
    info:string;
    error?:string;
}

export const LoginAPI ={
    login(data:LoginDataType){
        return axiosInstance.post<ResponseDataType>('auth/login', data);
    },
    logOut(){
        return axiosInstance.delete<RespLogOutType>('auth/me');
    },
    authMe(){
        return axiosInstance.post<ResponseDataType>('auth/me');
    },

}


