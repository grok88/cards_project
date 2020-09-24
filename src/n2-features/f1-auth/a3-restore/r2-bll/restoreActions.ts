import {ResponseDataType} from "../../a1-login/l3-dal/LoginAPI";

export const SET_USER = 'PROFILE/SET_USER'; // blank


export type RestoreReducerActions = ReturnType<typeof setUser> ;

export const setUser = (user: ResponseDataType) => {
    return {
        type: SET_USER,
        user
    } as const
}

