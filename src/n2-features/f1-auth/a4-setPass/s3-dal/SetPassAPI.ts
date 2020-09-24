import {axiosInstance} from "../../../../n1-main/m3-dal/instance";

export type SetPassDataType = {
    password: string
    resetPasswordToken: string
}

export type ResponseDataType = {
    error: string
}

export const SetPassAPI = {
    setPass(data: SetPassDataType) {
        return axiosInstance.post('auth/set-new-password', data);
    }
}