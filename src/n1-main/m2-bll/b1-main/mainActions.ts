import {RequestStatusType} from "./mainInitialState";

// export const LOGIN_LOADING = 'LOGIN/LOADING';
// export const LOGIN_ERROR = 'LOGIN/ERROR';
// export const LOGIN_SUCCESS = 'LOGIN/SUCCESS';


export const SET_STATUS = 'MAIN/SET_STATUS';
export const SET_ERROR = 'MAIN/SET_ERROR';

type SetStatusACType = ReturnType<typeof setStatus>;
type setErrorACType = ReturnType<typeof setError>;

export type mainReducerActions = SetStatusACType | setErrorACType;

export const setStatus = (status: RequestStatusType) => {
    return {
        type: SET_STATUS,
        status
    } as const
}
export const setError = (error: null | string) => {
    return {
        type: SET_ERROR,
        error
    } as const
}

