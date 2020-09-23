import {axiosInstance} from "../../../../n1-main/m3-dal/instance";

export type RegisterDataType={
    email:string
    password:string
}

export type ResponseRegisterDataType={
    error:string
}


export const RegisterAPI ={
    register(data:RegisterDataType){
        debugger
        return axiosInstance.post<ResponseRegisterDataType>('auth/register',data)
    }

}