import {axiosInstance} from "../../../n1-main/m3-dal/instance";


export const FilesAPI ={
    login(){
        return axiosInstance.post('auth/login');
    },
}


