import {axiosInstance} from "../../../../n1-main/m3-dal/instance";

export type RestoreDataType = {
    email: string;
    from?: string;
    message?: string;
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

    error: string;
}

export const RestoreAPI = {
    restorePass(data: RestoreDataType) {
        return axiosInstance.post('auth/forgot', data);
    }
}


